import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css';
import puppeteer from 'puppeteer';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  let repos = await repoRes.json();
  repos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    // .slice(0, 9);

  repos = repos.filter((item)=> item.homepage!==null??item)
  let reposFiltered = []
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

    
    const browser = await puppeteer.launch({
      executablePath: '/usr/bin/chromium-browser',
      headless: true,
      args: ["--no-sandbox", '--use-gl=egl']
    })
    const page = await browser.newPage();
    await page.goto(`https://${item.homepage?.replace('https://','')}`, { waitUntil: 'networkidle2' });
    await page.screenshot({path: `./public/${item.name}.png`})
    await page.close()

    await browser.close();

    let tagsLanguages = await tagsLanguagesRes.json();
    reposFiltered.push({
      id: item.id,
      name: item.name,
      image: "",
      description: item.description,
      tags: Object.keys(tagsLanguages),
      source_code: item.url,
      demo: `https://${item.homepage?.replace('https://','')}`
    })
  }
    
  return {
    props: { title: 'Projects', projects: reposFiltered },
    revalidate: 60*60*12,
  };
}

export default ProjectsPage;
