import ProjectCard from '../components/ProjectCard';
import styles from '../styles/ProjectsPage.module.css';
import chrome from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core';

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

    const isDev = !process.env.AWS_REGION

    const chromeExecPaths = {
      // win32: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      win32: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      linux: '/usr/bin/google-chrome',
      // linux: '/usr/bin/chromium-browser',
      darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    }

    let options;


  if (isDev) {
    options = {
      args: [],
      executablePath: exePath,
      headless: true,
      ignoreDefaultArgs: ['--disable-extensions']
    }
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
      ignoreDefaultArgs: ['--disable-extensions']
    }
  }

    const exePath = chromeExecPaths[process.platform]
    const browser = await puppeteer.launch(options)
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
