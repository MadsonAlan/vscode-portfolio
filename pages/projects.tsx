
import { NextPage, GetStaticProps } from 'next';
import { ProjectCard } from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css';
import { GithubRepos } from './github';
import { getLinkPreview } from 'link-preview-js';
// import puppeteer from 'puppeteer';
export interface GithubRepositoryesWithURLPage{
  id: string,
  name: string,
  description: string,
  tags: string[],
  source_code: string,
  demo: string,
  imageURL: string
}
interface ProjectsPageProps{
  projects: GithubRepositoryesWithURLPage[]
}
const ProjectsPage:NextPage<ProjectsPageProps> = ({ projects }) => {
  return (
    <>
      <h3>Stuff I&apos;ve Built So Far</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  let repos:GithubRepos[] = await repoRes.json();
  repos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    // .slice(0, 9);

  repos = repos.filter((item)=> item.homepage!==null??item)
  let reposFiltered:GithubRepositoryesWithURLPage[] = []
  for (let index = 0; index < repos.length; index++) {
    const item = repos[index];
    let tagsLanguagesRes = await fetch(
      item.languages_url,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );

    let tagsLanguages = await tagsLanguagesRes.json();
    const imageURL = await getLinkPreview(item.html_url) as {
      url: string;
      title: string;
      siteName: string | undefined;
      description: string | undefined;
      mediaType: string;
      contentType: string | undefined;
      images: string[];
      videos: {}[];
      favicons: string[];
    }
    reposFiltered.push({
      id: item.id,
      name: item.name,
      description: item.description,
      tags: Object.keys(tagsLanguages),
      source_code: item.html_url,
      demo: `https://${item.homepage?.replace('https://','')}`,
      imageURL: `${imageURL.images[0]}`
    })
  }
  return {
    props: { title: 'Projects', projects: reposFiltered },
    revalidate: 60*60*12,
  };
}

export default ProjectsPage;
