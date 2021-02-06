import styled from "styled-components";
import Link from "next/link";
import Date from "./date";

const Section = styled.section`
  padding: 6vw 4vw;
  margin: 0 auto;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: rgba(19, 15, 235, 0.1) -2px -14px 15px -10px;
`;

const Title = styled.h2`
  font-weight: 300;
  font-size: 34px;
  line-height: 46px;
  margin: 0 0 24px;
`;

const PostList = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    article:last-child {
      display: none;
    }
  }
  @media only screen and (max-width: 799px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  @media only screen and (max-width: 799px) {
    max-width: 500px;
    max-height: 500px;
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
const HomeBlog = ({ allPostsData }) => {
  const recentPosts = !allPostsData.length
    ? []
    : allPostsData.length === 1
    ? allPostsData
    : allPostsData.slice(0, allPostsData.length >= 3 ? 3 : 2);
  return (
    <Section>
      <Title>Recent posts</Title>
      <PostList>
        {recentPosts.map(({ id, date, title, description, image, time }) => (
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
    </Section>
  );
};

export default HomeBlog;
