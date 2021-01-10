import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import styled from "styled-components";

const TopSection = styled.section`
  padding: 5vw 4vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-color: #e6e6e6;
`;

const ContentSection = styled.section`
  width: 100%;
  margin: 0px auto;
  max-width: 800px;
  padding: 40px;
`;

const Content = styled.div`
  width: 75%;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 34px;
  line-height: 46px;
  margin: 0 0 24px;
`;

const ContentTitle = styled.h2`
  font-size: 2rem;
`;

const About = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <TopSection>
        <Content>
          <Title>About</Title>
        </Content>
      </TopSection>
      <ContentSection>
        <ContentTitle>
          Hello{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </ContentTitle>
        <p>I'm Jordan Wilson.</p>
      </ContentSection>
    </Layout>
  );
};

export default About;
