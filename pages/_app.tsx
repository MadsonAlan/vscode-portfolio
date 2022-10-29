import { AppProps } from "next/app";
import { useEffect } from "react";
import { CustomHead } from "../components/Head";
import { Layout } from "../components/Layout";
import "../styles/globals.css";
import "../styles/themes.css";

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme") ||''
      );
    }
  }, []);

  return (
    <Layout>
      <CustomHead title={`Madson Alan | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
