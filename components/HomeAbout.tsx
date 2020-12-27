import styled from "styled-components";

const Section = styled.section`
  padding: 9vw 4vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
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

const Content = styled.div`
  width: 75%;
`;

const Title = styled.h1`
  font-weight: 300;
  /* color: white; */
  font-size: 34px;
  line-height: 46px;
  margin: 0 0 24px;
`;

const HomeAbout = () => {
  return (
    <Section>
      <Content>
        <Title>Hey there! My name is Jordan.</Title>
      </Content>
    </Section>
  );
};

export default HomeAbout;
