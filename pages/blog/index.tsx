import Head from "next/head";
import styled from "styled-components";
import Layout, { siteTitle } from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/date";
import { GetStaticProps } from "next";

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
  max-width: 1200px;
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

const PostList = styled.div`
  display: flex;
  justify-content: space-around;
  @media only screen and (min-width: 760px) {
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 759px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  @media only screen and (min-width: 1300px) {
    max-width: 400px;
    max-height: 400px;
  }
  @media only screen and (min-width: 1100px) {
    max-width: 300px;
    max-height: 300px;
  }
  @media only screen and (min-width: 860px) and (max-width: 1099px) {
    max-width: 350px;
    max-height: 350px;
  }
  @media only screen and (min-width: 760px) and (max-width: 859px) {
    max-width: 300px;
    max-height: 300px;
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ArticleTitle = styled.a`
  font-weight: bold;
  font-size: calc((1.5 - 1) * 1.2vw + 1rem);
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 0px;
  margin-bottom: 10px;
`;

const DateTime = styled.p`
  margin: 0px;
  opacity: 0.7;
  font-size: 13px;
`;

const Clock = styled.img`
  vertical-align: -0.125em;
  width: 12px;
`;

const Blog = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <TopSection>
        <Content>
          <Title>Blog</Title>
        </Content>
      </TopSection>
      <ContentSection>
        <PostList>
          {allPostsData.map(({ id, date, title, description, image, time }) => (
            <Article key={id}>
              <Link href={`/posts/${id}`}>
                <a>
                  <Image src="/images/blogentry.jpg" />
                </a>
              </Link>
              <Link href={`/posts/${id}`}>
                <ArticleTitle>{title}</ArticleTitle>
              </Link>
              <Description>{description}</Description>
              <DateTime>
                <time>
                  <Date dateString={date} /> |{" "}
                  <Clock src="/images/clock.svg" alt="" /> {time} minute read
                </time>
              </DateTime>
            </Article>
          ))}
        </PostList>
      </ContentSection>
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

export default Blog;
