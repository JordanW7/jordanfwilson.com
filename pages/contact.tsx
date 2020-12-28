import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Contact</h1>
      <h2>Coming Soon...</h2>
    </Layout>
  );
};

export default About;
