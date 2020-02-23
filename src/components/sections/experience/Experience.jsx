import React from "react";
import styled from "styled-components";
import HeaderIcon from "../../common/HeaderIcon";
import ExperienceCard from "./ExperienceCard";

const Section = styled.section`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-image: url(images/bg-experience-3200.jpg);
  padding-bottom: 44px;
  @media only screen and (max-width: 767px) {
    background-image: url(images/bg-mobile-1600.jpg);
  }
  @media (pointer: coarse) {
    background-attachment: initial !important;
  }
  @media only screen and (min-width: 768px) and (max-width: 1600px) and (max-resolution: 191dpi) {
    background-image: url(images/bg-experience-1600.jpg);
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) and (min-resolution: 192dpi) {
    background-image: url(images/bg-experience-1920.jpg);
  }
  @media only screen and (min-width: 1601px) and (max-width: 1920px) and (max-resolution: 191dpi) {
    background-image: url(images/bg-experience-1920.jpg);
  }
  @media only screen and (min-width: 1025px) and (min-resolution: 192dpi),
    screen and (min-width: 1921px) {
    background-image: url(images/bg-experience-3200.jpg);
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

const Experience = () => {
  return (
    <Section>
      <Container id="experience">
        <Header>
          <Title>
            <HeaderIcon type="laptop" />
            Experience
          </Title>
          <Subtitle>Here's where I've worked.</Subtitle>
        </Header>
        <ExperienceCard
          roleTitle="Software Engineer"
          company="Red Sift"
          companyLink="https://redsift.com"
          dates="December 2018 - Current"
          skills={[
            "JavaScript",
            "ES6",
            "React",
            "Redux",
            "Styled Components",
            "Node.js",
            "Python"
          ]}
        >
          <p>
            Lead Developer and Product Owner for OnINBOX. Also active on other
            security products and projects such as OnDMARC, the Red Sift
            platform, and the frontend Design System.
          </p>
        </ExperienceCard>
      </Container>
    </Section>
  );
};

export default Experience;
