import { GetStaticProps, NextPage } from 'next';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css';
import { GithubRepos } from './github';
// import puppeteer from 'puppeteer';
export interface GithubRepositoryesWithURLPage{
  id: string,
  name: string,
  description: string,
  tags: string[],
  source_code: string,
  demo: string
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

    
    // const browser = await puppeteer.launch()
    // const page = await browser.newPage();
    // await page.goto(`https://${item.homepage?.replace('https://','')}`, { waitUntil: 'networkidle2' });
    // await page.screenshot({path: `./public/${item.name}.png`})
    // await page.close()

    // await browser.close();

    let tagsLanguages = await tagsLanguagesRes.json();
    reposFiltered.push({
      id: item.id,
      name: item.name,
      description: item.description,
      tags: Object.keys(tagsLanguages),
      source_code: item.url,
      demo: `https://${item.homepage?.replace('https://','')}`
    })
  //   getLinkPreview(`https://${item.homepage?.replace('https://','')}`, {
  //     imagesPropertyType: "og", // fetches only open-graph images
  //     headers: {
  //       "user-agent": "googlebot", // fetches with googlebot crawler user agent
  //       "Accept-Language": "fr-CA", // fetches site for French language
  //       // ...other optional HTTP request headers
  //     },
  //     timeout: 1000
  //   }).then((data) =>{
  //   // console.debug(data)
  //   console.log(data)
  // }
  // );
  }
  return {
    props: { title: 'Projects', projects: reposFiltered },
    revalidate: 60*60*12,
  };
}

export default ProjectsPage;
