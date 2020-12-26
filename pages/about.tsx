import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>About</h1>
    </Layout>
  );
};

export default About;
