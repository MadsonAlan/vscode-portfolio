import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import {RepoCard} from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';
import { getLinkPreview } from 'link-preview-js';
import { GithubRepositoryesWithURLPage } from './projects';

export interface GithubRepositoriesWithImageURLAndTechnologies extends Omit<GithubRepositoryesWithURLPage, 'demo' | 'source_code'>{
  url:string
  stargazers_count: number
  homepage: string | null
  languages_url: string
  watchers: number
  forks: number
  html_url:string
}
interface GithubUser{
  avatar_url: string,
  login: string,
  public_repos: number,
  followers: number
}
export interface GithubRepos{
  id: string
  name:string
  description:string
  url:string
  stargazers_count: number
  homepage: string | null
  languages_url: string
  watchers: number
  forks: number
  html_url:string
}

interface GithubPageProps {
  user: GithubUser,
  repos: GithubRepositoriesWithImageURLAndTechnologies []
}
const GithubPage:NextPage<GithubPageProps> = ({ repos, user }) => {
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME as string}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  const user:GithubUser = await userRes.json();

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
    let reposInformation:GithubRepositoriesWithImageURLAndTechnologies[] = []
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
      reposInformation.push({
        id: item.id,
        name: item.name,
        description: item.description,
        tags: Object.keys(tagsLanguages),
        imageURL: `${imageURL.images[0]}`,
        forks: item.forks,
        homepage: item.homepage,
        html_url: item.html_url,
        languages_url: item.languages_url,
        stargazers_count: item.stargazers_count,
        watchers: item.watchers,
        url: item.url
      })
    }

  return {
    props: { title: 'GitHub', repos: reposInformation, user },
    revalidate: 60*60*12,
  };
}

export default GithubPage;
