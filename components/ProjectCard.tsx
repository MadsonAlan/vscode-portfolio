import Image from 'next/image';
import { GithubRepositoryesWithURLPage } from '../pages/projects';
import styles from '../styles/ProjectCard.module.css';
interface ProjectCardProps{
  project: GithubRepositoryesWithURLPage
}
export const ProjectCard = ({ project }:ProjectCardProps) => {
  return (
    <div className={styles.card}>
      {project.name?<Image src={project.imageURL} height={200} width={300} className={styles.imageCard} alt={project.name} />:<></>}
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
            >
              Source Code
            </a>
          )}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

