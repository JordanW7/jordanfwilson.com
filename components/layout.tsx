import Head from "next/head";
import Navigation from "./Navigation";
import Footer from "./Footer";

// const Container = styled.div`
//   max-width: 36rem;
//   padding: 0 1rem;
//   margin: 3rem auto 6rem;
// `;

export const siteTitle = "Jordan Wilson | Software Engineer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
