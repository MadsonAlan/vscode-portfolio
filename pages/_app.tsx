import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <Layout>
      <Head title={`Madson Alan | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
