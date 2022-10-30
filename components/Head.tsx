import Head from 'next/head';

interface CustomHeadProps{
  title: string
}
export function CustomHead ({ title }:CustomHeadProps){
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Madson Alan is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Madson Alan, madson, ranganath, web developer portfolio, madson web developer, madson developer, mern stack, Madson Alan portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Madson Alan's Portfolio" />
      <meta
      property="og:image"
      content="https://portifolio-madson.vercel.app/api/og?username=myusername"
      />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
    </Head>
  );
};

CustomHead.defaultProps = {
  title: 'Madson Alan',
};
