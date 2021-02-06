import Head from "next/head";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

export const siteTitle = "Jordan Wilson | Software Engineer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <meta
          name="Description"
          content="Problem Finder, Creative Problem Solver and Software Engineer."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:width" content="279" />
        <meta property="og:image:height" content="279" />
        <meta
          property="og:description"
          content="Problem Finder, Creative Problem Solver and Software Engineer."
        />
        <meta property="og:title" content="Jordan Wilson - Software Engineer" />
        <meta property="og:url" content="https://jordanfwilson.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
