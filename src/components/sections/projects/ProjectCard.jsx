import React from "react";
import ProjectTags from "./ProjectTags";
import ProjectButtons from "./ProjectButtons";
import styled from "styled-components";

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
  margin: 0;
`;

const CardContent = styled.div`
  display: flex;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const ScreenshotContainer = styled.a`
  display: flex;
  padding: 20px 0px;
  width: 50%;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Screenshot = styled.img`
  height: 100%;
  width: 90%;
  margin: auto;
  border: 5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 8px dimgrey;
  transition: box-shadow 0.5s linear;
  :hover {
    box-shadow: 0 0 15px white;
  }
`;

const ProjectInfo = styled.div`
  display: block;
  padding-top: 20px;
  color: white;
  font-weight: 300;
  font-size: 17px;
  width: 50%;
  @media only screen and (max-width: 767px) {
    font-size: 15px;
    padding-top: 0px;
    width: 100%;
  }
`;

const ProjectCard = ({
  name,
  description,
  image,
  frontLink,
  backLink,
  appLink,
  tags
}) => {
  return (
    <Card>
      <Header>
        <a href={appLink} target="_blank" rel="noopener noreferrer">
          <Title>{name}</Title>
        </a>
        <div>
          {frontLink && (
            <ProjectButtons
              type={backLink ? "Frontend" : "Code"}
              link={frontLink}
            />
          )}
          {backLink && <ProjectButtons type="Backend" link={backLink} />}
          <ProjectButtons type="app" link={appLink} />
        </div>
      </Header>
      <CardContent>
        <ScreenshotContainer
          href={appLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Screenshot
            className="project-screenshot"
            src={image}
            alt="Project Screenshot"
          />
        </ScreenshotContainer>

        <ProjectInfo>
          <ProjectTags tags={tags} />
          <p>{description}</p>
        </ProjectInfo>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
