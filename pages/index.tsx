import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

// import React, { Fragment } from "react";
// import Hero from "./sections/hero/Hero";
// import Footer from "./sections/footer/Footer";
// import Navigation from "./sections/navigation/Navigation";

// import Experience from "./sections/experience/Experience";
// import Projects from "./sections/projects/Projects";
// import Skills from "./sections/skills/Skills";
// import About from "./sections/about/About";

// const App = () => {
//   return (
//     <Fragment>
//       <Navigation />
//       <Hero />
//       <main>
//         <Experience />
//         <Projects />
//         <Skills />
//         <About />
//       </main>
//       <Footer />
//     </Fragment>
//   );
// };

// export default App;


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
        <h2>Blog</h2>
        <ul>
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
        </ul>
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
