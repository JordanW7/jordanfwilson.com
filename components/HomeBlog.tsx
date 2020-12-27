import styled from "styled-components";
import Link from "next/link";
import Date from "./date";

const Section = styled.section`
  padding: 9vw 4vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: rgba(19, 15, 235, 0.1) -2px -14px 15px -10px;
  /* background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url(images/bg-hero-3200.jpg);

  @media (pointer: coarse) {
    background-attachment: initial !important;
  }

  @media only screen and (max-width: 1024px) and (max-resolution: 191dpi) {
    background-image: url(images/bg-hero-1024.jpg);
  }

  @media only screen and (max-width: 1024px) and (min-resolution: 192dpi) {
    background-image: url(images/bg-hero-1920.jpg);
  }

  @media only screen and (min-width: 1025px) and (max-width: 1600px) and (max-resolution: 191dpi) {
    background-image: url(images/bg-hero-1600.jpg);
  }

  @media only screen and (min-width: 1601px) and (max-width: 1920px) and (max-resolution: 191dpi) {
    background-image: url(images/bg-hero-1920.jpg);
  }

  @media only screen and (min-width: 1025px) and (min-resolution: 192dpi),
    screen and (min-width: 1921px) {
    background-image: url(images/bg-hero-3200.jpg);
  } */
`;

const HomeBlog = ({ allPostsData }) => {
  return (
    <Section>
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
    </Section>
  );
};

export default HomeBlog;
