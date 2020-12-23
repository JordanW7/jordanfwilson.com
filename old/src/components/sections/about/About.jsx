import React from "react";
import styled from "styled-components";
import HeaderIcon from "../../common/HeaderIcon";

const Section = styled.section`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-image: url(images/bg-about-3200.jpg);
  padding-bottom: 74px;
  padding-top: 10px;
  @media only screen and (max-width: 767px) {
    background-image: url(images/bg-mobile-1600.jpg);
  }
  @media (pointer: coarse) {
    background-attachment: initial !important;
  }
  @media only screen and (min-width: 768px) and (max-width: 1600px) and (max-resolution: 191dpi) {
    background-image: url(images/bg-about-1600.jpg);
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) and (min-resolution: 192dpi) {
    background-image: url(images/bg-about-1920.jpg);
  }
  @media only screen and (min-width: 1601px) and (max-width: 1920px) and (max-resolution: 191dpi) {
    background-image: url(images/bg-about-1920.jpg);
  }
  @media only screen and (min-width: 1025px) and (min-resolution: 192dpi),
    screen and (min-width: 1921px) {
    background-image: url(images/bg-about-3200.jpg);
  }
`;

const Article = styled.article`
  max-width: 900px;
  margin: 0 auto;
  padding: 0px 10px;
  width: 100%;
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

const Card = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid white;
  border-radius: 4px;
  padding: 20px;
  color: white;
  font-size: 18px;
  text-align: justify;
`;

const Subtitle = styled.span`
  font-size: 35px;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const ContentHeader = styled.h3`
  font-size: 35px;
  font-weight: 300;
  margin: 0;
  opacity: 0.8;
  text-shadow: 0 0 5px silver;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  transition: opacity 0.25s linear;
  :hover {
    opacity: 1;
  }
`;

const Highlight = styled.mark`
  font-weight: 600;
  text-shadow: 0 0 10px cyan;
  background-color: rgba(0, 0, 0, 0);
  color: white;
`;

const About = () => {
  return (
    <Section>
      <Article id="about">
        <Header>
          <Title>
            <HeaderIcon type="message" /> About
          </Title>
          <Subtitle>Here's why I build.</Subtitle>
        </Header>
        <Card>
          <ContentHeader>#Technology</ContentHeader>
          <p>
            The improvements in technology over the last short 15 years have
            been huge. We interact with technology on a daily basis and the tech
            industry now has one of the most significant impacts on the world.
            The industry is constantly changing and{" "}
            <Highlight>
              I believe that change is good, and that learning should never
              stop.
            </Highlight>{" "}
            I love learning new things on a daily basis as a developer and being
            at the forefront of this phenomenal industry. Over the last several
            years things have begun moving incredibly fast and web development
            is becoming even more important as Web Apps replace traditional
            software.
          </p>
          <ContentHeader>#ThinkDifferent</ContentHeader>
          <p>
            I completed a{" "}
            <Highlight>
              Bachelor of Music with Honours (1st) in Music Composition
            </Highlight>{" "}
            after leaving High School, which gives me a unique background and
            skillset. Thinking creatively, problem solving, being responsible
            and dependable, being able to work well with others and communicate
            effectively, critical reflection, performing under pressure,
            adaptability, analytical skills, attention to detail,
            self-management, planning and time management skills are all second
            nature to music graduates. For this reason,{" "}
            <Highlight>musicians make excellent developers.</Highlight>
          </p>
          <p>
            I love a good challenge and trying new things to solve them. I
            really enjoy the creative process of envisioning solutions to
            problems and developing products. I am passionate about developing{" "}
            <Highlight>
              technology that improves the way we learn, complete everyday tasks
              and the way we do our work.
            </Highlight>
          </p>
          <ContentHeader>#UserFocused</ContentHeader>
          <p>
            I understand the{" "}
            <Highlight>importance of user centered development.</Highlight> I am
            obsessed with details (in a good way), clean beautiful UIs and
            easy-to-use functionality. Putting myself in the user’s shoes during
            development, then fine-tuning the product with user feedback is
            something I spend extra time on. I know that often,{" "}
            <Highlight>little things make all the difference.</Highlight>
          </p>
        </Card>
      </Article>
    </Section>
  );
};

export default About;
