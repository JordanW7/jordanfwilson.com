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
  flex-wrap: wrap;
  justify-content: space-between;
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
        {recentPosts.map(({ id, date, title, subtitle, image, time }) => (
          <div key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
          </div>
        ))}
      </PostList>
    </Section>
  );
};

export default HomeBlog;
