
import styles from '../styles/RepoCard.module.css';
import { GithubRepositoriesWithImageURLAndTechnologies } from '../pages/github';
import { ForkIcon } from './icons/ForkIcon';
import { GithubIcon } from './icons/GithubIcon';
import { LinkIcon } from './icons/LinkIcon';
import { StarIcon } from './icons/StarIcon';
import { WatchIcon } from './icons/WatchIcon';
import Image from 'next/image';

interface RepoCardProps{
  repo: GithubRepositoriesWithImageURLAndTechnologies
}
export const RepoCard = ({ repo }:RepoCardProps) => {
  return (
    <div className={styles.card}>
      <Image src={repo.imageURL} height={200} width={400} className={styles.imageCard} alt={repo.name} />
      <div>
        <h3 className={styles.title}>{repo.name}</h3>
        <p>{repo.description}</p>
        <div className={styles.tags}>
          {repo.tags.map((tag) => (
            <span key={tag} className={tag=='C++'?'CPlusPlus':tag}>
              {tag}
            </span>
          ))}
        </div>
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

