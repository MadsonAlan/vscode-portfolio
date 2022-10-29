import styles from '../styles/Tabsbar.module.css';
import { Tab } from './Tab';

export const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.tsx" path="/" />
      <Tab icon="/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/typescript.svg" filename="projects.ts" path="/projects" />
      <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
    </div>
  );
};
