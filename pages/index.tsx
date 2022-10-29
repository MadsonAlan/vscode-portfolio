
import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { Illustration } from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

const HomePage:NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>WEBSITES</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Madson Alan</h1>
            <h6 className={styles.bio}>Full Stack Web Developer</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { title: 'Home' },
  };
}

export default HomePage
