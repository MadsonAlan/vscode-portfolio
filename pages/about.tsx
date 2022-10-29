import { GetStaticProps, NextPage } from "next";

const AboutPage:NextPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
