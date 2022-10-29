
import styles from '../styles/RepoCard.module.css';
import { GithubRepos } from '../pages/github';
import { ForkIcon } from './icons/ForkIcon';
import { GithubIcon } from './icons/GithubIcon';
import { LinkIcon } from './icons/LinkIcon';
import { StarIcon } from './icons/StarIcon';
import { WatchIcon } from './icons/WatchIcon';

interface RepoCardProps{
  repo: GithubRepos
}
export const RepoCard = ({ repo }:RepoCardProps) => {
  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.title}>{repo.name}</h3>
        <p>{repo.description}</p>
      </div>
      <div className={styles.stats}>
        <div>
          <div>
            <WatchIcon className={styles.icon} /> {repo.watchers}
          </div>
          <div>
            <ForkIcon className={styles.icon} /> {repo.forks}
          </div>
          <div>
            <StarIcon className={styles.icon} /> {repo.stargazers_count}
          </div>
        </div>
        <div>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <GithubIcon height={20} width={20} className={styles.icon} />
          </a>
          {repo.homepage && (
            <a href={`https://${repo.homepage?.replace('https://','')}`} target="_blank" rel="noopener noreferrer">
              <LinkIcon height={20} width={20} className={styles.icon} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

