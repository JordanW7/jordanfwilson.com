import styled from "styled-components";
// import HeaderIcon from "./common/HeaderIcon";
import ProjectList from "./ProjectList";

const Section = styled.section`
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 10px;
  padding-bottom: 30px;
  background-image: url(images/bg-portfolio-3200.jpg);
  @media only screen and (max-width: 767px) {
    background-image: url(images/bg-mobile-1600.jpg);
  }
  @media (pointer: coarse) {
    background-attachment: initial !important;
  }
  @media only screen and (min-width: 768px) and (max-width: 1600px) and (max-resolution: 191dpi) {
    background-image: url(images/bg-portfolio-1600.jpg);
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) and (min-resolution: 192dpi) {
    background-image: url(images/bg-portfolio-1920.jpg);
  }
  @media only screen and (min-width: 1601px) and (max-width: 1920px) and (max-resolution: 191dpi) {
    background-image: url(images/bg-portfolio-1920.jpg);
  }
  @media only screen and (min-width: 1025px) and (min-resolution: 192dpi),
    screen and (min-width: 1921px) {
    background-image: url(images/bg-portfolio-3200.jpg);
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0px 10px;
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
`;

const Title = styled.h2`
  color: white;
  font-size: 50px;
  font-weight: 300;
  margin: 10px 0px 0px 0px;
  i {
    font-size: 50;
  }
`;

const Subtitle = styled.span`
  font-size: 35px;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const Portfolio = () => {
  return (
    <Section>
      <Container id="portfolio">
        <Header>
          <Title>
            {/* <HeaderIcon type="heart" /> */}
            Portfolio
          </Title>
          <Subtitle>Here's what I build.</Subtitle>
        </Header>
        <ProjectList />
      </Container>
    </Section>
  );
};

export default Portfolio;
