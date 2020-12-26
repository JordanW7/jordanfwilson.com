import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

import HomeHero from "../components/HomeHero";
import HomeAbout from "../components/HomeAbout";
import HomeBlog from "../components/HomeBlog";

const Home = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HomeHero />
      <HomeAbout />
      <HomeBlog allPostsData={allPostsData} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
