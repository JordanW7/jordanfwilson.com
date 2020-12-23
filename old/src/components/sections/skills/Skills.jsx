import React from "react";
import HeaderIcon from "../../common/HeaderIcon";
import styled from "styled-components";
import SkillsCard from "./SkillsCard";

const Section = styled.section`
  background-image: url(images/bg-skills-3200.jpg);
  background-color: #2d2d2d;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding-top: 10px;
  padding-bottom: 30px;
  @media only screen and (max-width: 767px) {
    background-image: url(images/bg-mobile-1600.jpg);
  }
  @media (pointer: coarse) {
    background-attachment: initial !important;
  }
  @media only screen and (min-width: 768px) and (max-width: 1600px) and (max-resolution: 191dpi) {
    background-image: url(images/bg-skills-1600.jpg);
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) and (min-resolution: 192dpi) {
    background-image: url(images/bg-skills-1920.jpg);
  }
  @media only screen and (min-width: 1601px) and (max-width: 1920px) and (max-resolution: 191dpi) {
    background-image: url(images/bg-skills-1920.jpg);
  }
  @media only screen and (min-width: 1025px) and (min-resolution: 192dpi),
    screen and (min-width: 1921px) {
    background-image: url(images/bg-skills-3200.jpg);
  }
`;

const Article = styled.article`
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

const skillList = [
  {
    name: "Front-End Development",
    icon: "desktop",
    description:
      "· HTML5 · CSS3 · JavaScript · ES6 · React.js · Redux · Styled Components"
  },
  {
    name: "Back-End Development",
    icon: "database",
    description: "· Node.js · Python · PostgreSQL · Redis"
  },
  {
    name: "Development Environment",
    icon: "tool",
    description:
      "· Docker · CircleCI · Firebase · Heroku · Git · Lint · Chrome DevTools · command-line · npm"
  },
  {
    name: "Architecture Principles",
    icon: "bulb",
    description:
      "· Responsive web design · Mobile-first development · Performance optimized · Keep it simple"
  }
];

const Skills = () => {
  return (
    <Section>
      <Article id="skills">
        <Header>
          <Title>
            <HeaderIcon type="fire" /> Skills
          </Title>
          <Subtitle>Here's how I build.</Subtitle>
        </Header>
        {skillList.map(({ name, icon, description }) => (
          <SkillsCard
            key={name}
            name={name}
            icon={icon}
            description={description}
          />
        ))}
      </Article>
    </Section>
  );
};

export default Skills;
