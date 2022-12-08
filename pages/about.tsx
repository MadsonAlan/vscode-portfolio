import { GetStaticProps, NextPage } from "next";
import styles from "../styles/AboutPage.module.css"
const AboutPage:NextPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <br/>
      <br/>
      <p className={styles.littleAboutMe}>

- 🔥 Developer Full Stack Web focused in front-end <br/>

- 🌱 I&apos;m currently learning more Docker, GraphQL and Storybook<br/>

- 👨‍💻 All of my projects are available here in <a href="https://portfolio-madson.vercel.app/" target="_blank" rel="noreferrer noopener">my portifolio</a> or on my <a href="https://github.com/MadsonAlan" target="_blank" rel="noreferrer noopener">Github</a><br/>

- ▶️ I have a youtube channel but I have to go back to creating videos <a href="https://www.youtube.com/channel/UC_z9DxrMB85Linl3speUb2Q" target="_blank" rel="noreferrer noopener">my channel</a><br/>

- 🔭 I&apos;m currently working at <a href="http://petruz.com/en" target="_blank" rel="noreferrer noopener">Petruz Fruity</a> as a programmer focused on developing solutions and reports using SQL software and crystal reports in SAP Business One. I also develop and maintain, in a full stack (front-end and back-end) way, some internal systems of the company using Node.js, Next.js, Typescrypt, Jest and SQL Server and other technologies. Always looking to develop using clean code and always trying to find the best architecture for each project.
      </p>
      <br/>
      <br/>
      <h3>A little of what I know</h3>
      <br/>
      <br/>
      <p>
        <h4>Front end</h4><br/>
        <img src="https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript" alt="Javascript" />&nbsp;
        <img src="https://img.shields.io/badge/-React-05122A?style=flat&logo=react" alt="React" />&nbsp;
        <img src="https://img.shields.io/badge/-Next.js-05122A?style=flat&logo=next.js" alt="Next Js" />&nbsp;
        <img src="https://img.shields.io/badge/-Typescrypt-05122A?style=flat&logo=typescript" alt="Typescript" />&nbsp;
        <img src="https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5" alt="HTML" />&nbsp;
        <img src="https://img.shields.io/badge/-Sass-05122A?style=flat&logo=sass" alt="SASS" />&nbsp;
        <img src="https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6" alt="CSS" />&nbsp;
        <img src="https://img.shields.io/badge/-Flutter-05122A?style=flat&logo=flutter" alt="Flutter" />&nbsp;
        <img src="https://img.shields.io/badge/-Dart-05122A?style=flat&logo=dart" alt="Dart" />&nbsp;

        <br/>
        <br/>
        <h4>Back end</h4><br/>
        <img src="https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript" alt="Javascript" />&nbsp;
        <img src="https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=node.js" alt="Node Js" />&nbsp;
        <img src="https://img.shields.io/badge/-Typescrypt-05122A?style=flat&logo=typescript" alt="Typescript" />&nbsp;
        <img src="https://img.shields.io/badge/-Microsoft%20Sql%20Server-05122A?style=flat&logo=microsoft-sql-server" alt="SQL Server" />&nbsp;
        <img src="https://img.shields.io/badge/-Graphql-05122A?style=flat&logo=graphql" alt="GraphQL" />&nbsp;
        
        <br/>
        <br/>
        <h4>DevOps</h4><br/>
        <img src="https://img.shields.io/badge/-Docker-05122A?style=flat&logo=docker" alt="Docker" />&nbsp;
        
        <br/>
        <br/>
        <h4>Code control</h4><br/>
        <img src="https://img.shields.io/badge/-Git-05122A?style=flat&logo=git" alt="Git" />&nbsp;
        <img src="https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github" alt="Github" />&nbsp;
        <img src="https://img.shields.io/badge/-Gitlab-05122A?style=flat&logo=gitlab" alt="Gitlab" />&nbsp;

      <img src="https://img.shields.io/badge/-SAP-05122A?style=flat&logo=SAP" alt="SAP" />&nbsp;
      <img src="https://img.shields.io/badge/-Jest-05122A?style=flat&logo=jest" alt="Jest" />&nbsp;
      <img src="https://img.shields.io/badge/-Visual%20Studio%20Code-05122A?style=flat&logo=visual-studio-code&logoColor=007ACC" alt="VS Code" />&nbsp;
      </p>
      <br/>
      <br/>

      <h3>Summary of my activities on github</h3><br/>
      <p>
      <img width="100%" src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=madsonAlan&theme=github_dark" alt="MadsonAlan's profile details"/>
      </p>
      <p>
      <img width="49%" src="http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=madsonAlan&theme=github_dark" alt="MadsonAlan's repos per language"/>
      <img width="49%" src="http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=madsonAlan&theme=github_dark" alt="MadsonAlan's most comit languages"/>
      </p>
      <p>
      <img width="49%" src="http://github-profile-summary-cards.vercel.app/api/cards/stats?username=madsonAlan&theme=github_dark" alt="MadsonAlan's stats"/>
      <img width="49%" src="http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=madsonAlan&theme=github_dark&utcOffset=8" alt="MadsonAlan's productive time"/>
      </p>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
