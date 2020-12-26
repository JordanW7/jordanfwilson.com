import Head from "next/head";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

// const Container = styled.div`
//   max-width: 36rem;
//   padding: 0 1rem;
//   margin: 3rem auto 6rem;
// `;

//TODO: Migrate this.
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8" />
//     <meta
//       name="viewport"
//       content="width=device-width, initial-scale=1, shrink-to-fit=no"
//     />
//     <meta
//       name="Description"
//       content="Creative thinker and problem solver who is passionate about developing user-focused technology that helps great people achieve great things, improving the way we live our lives and the way we do our work in the 21st century."
//     />
//     <meta property="og:image" content="%PUBLIC_URL%/og-image.jpg" />
//     <meta property="og:image:width" content="279" />
//     <meta property="og:image:height" content="279" />
//     <meta
//       property="og:description"
//       content="Creative thinker and problem solver who is passionate about developing user-focused technology that helps great people achieve great things."
//     />
//     <meta property="og:title" content="Jordan Wilson - Software Engineer" />
//     <meta property="og:url" content="https://jordanfwilson.com" />
//     <link
//       rel="apple-touch-icon"
//       sizes="180x180"
//       href="%PUBLIC_URL%/apple-touch-icon.png"
//     />
//     <link
//       rel="icon"
//       type="image/png"
//       sizes="32x32"
//       href="%PUBLIC_URL%/favicon-32x32.png"
//     />
//     <link
//       rel="icon"
//       type="image/png"
//       sizes="16x16"
//       href="%PUBLIC_URL%/favicon-16x16.png"
//     />
//     <link rel="manifest" href="%PUBLIC_URL%/site.webmanifest" />
//     <link
//       rel="mask-icon"
//       href="%PUBLIC_URL%/safari-pinned-tab.svg"
//       color="#5bbad5"
//     />
//     <meta name="msapplication-TileColor" content="#2b5797" />
//     <meta name="theme-color" content="#ffffff" />
//     <title>Jordan Wilson | Software Engineer</title>
//   </head>
//   <body>
//     <noscript>
//       You need to enable JavaScript to run this app.
//     </noscript>
//     <div id="root"></div>
//   </body>
// </html>

const Main = styled.main`
  min-height: 100vh;
  min-width: 100vw;
`;

export const siteTitle = "Jordan Wilson | Software Engineer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
