import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";
import { GetStaticProps } from "next";

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
      <section>
        <h1>Blog</h1>
        <h2>Coming Soon...</h2>
        {/* <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul> */}
      </section>
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
