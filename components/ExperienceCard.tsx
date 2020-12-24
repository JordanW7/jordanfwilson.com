import React from "react";
import styled from "styled-components";
import SkillTags from "./common/SkillTags";

const Card = styled.article`
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid white;
  padding: 10px 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  border-bottom: 1px solid white;
  padding-bottom: 5px;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    padding-bottom: 10px;
  }
`;

const Title = styled.h3`
  color: white;
  font-size: 50px;
  font-weight: 300;
  font-size: 36px;
  @media only screen and (max-width: 767px) {
    font-size: 30px;
  }
  margin: 0;
`;

const CardContent = styled.div`
  display: flex;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const ProjectInfo = styled.div`
  display: block;
  padding-top: 20px;
  color: white;
  font-weight: 300;
  font-size: 17px;
  width: 100%;
  @media only screen and (max-width: 767px) {
    font-size: 15px;
  }
`;

const CompanyLink = styled.a`
  color: rgb(0, 230, 230) !important;
`;

const ExperienceCard = ({
  roleTitle,
  company,
  companyLink,
  dates,
  skills,
  children
}) => {
  return (
    <Card>
      <Header>
        <Title>
          {roleTitle} @{" "}
          <CompanyLink
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {company}
          </CompanyLink>
        </Title>
        <div>{dates}</div>
      </Header>
      <CardContent>
        <ProjectInfo>
          <SkillTags tags={skills} />
          {children}
        </ProjectInfo>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
