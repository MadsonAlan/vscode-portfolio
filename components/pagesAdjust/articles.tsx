import { GetStaticProps, NextPage } from 'next';
import {ArticleCard} from '../ArticleCard';
import styles from '../styles/ArticlesPage.module.css';
export interface Article{
  id: string
  url: string
  cover_image: string
  title: string
  description: string
  page_views_count: number
  public_reactions_count: number
  comments_count: number
}
interface ArticlesPageProps{
  articles: Article[]
}
export const ArticlesPage = ({ articles }:ArticlesPageProps) => {
  return (
    <>
      <h3>
        Recent Posts from{' '}
        <a
          href="https://dev.to/itsnitinr"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.underline}
        >
          dev.to
        </a>
      </h3>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch(
    'https://dev.to/api/articles/me/published?per_page=6',
    {
      headers: {
        'api-key': process.env.DEV_TO_API_KEY as string,
      },
    }
  );

  const data = await res.json();

  return {
    props: { title: 'Articles', articles: data },
    revalidate: 60,
  };
}
