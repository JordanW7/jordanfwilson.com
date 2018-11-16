import React from "react";
import { Row, Col } from "antd";
import ProjectTags from "./ProjectTags";
import ProjectButtons from "./ProjectButtons";
import "./Project.css";

const Project = ({
  name,
  description,
  image,
  frontLink,
  backLink,
  appLink,
  tags
}) => {
  return (
    <article>
      <Row className="project-card">
        <Col span={24} className="project-title">
          <header className="project-title-contents">
            <a href={appLink} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </header>
          <div className="project-buttons">
            <ProjectButtons
              Type={backLink ? "front" : "code"}
              Link={frontLink}
            />
            <ProjectButtons Type="back" Link={backLink} />
            <ProjectButtons Type="app" Link={appLink} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <figure className="project-screenshotbox">
            <a href={appLink} target="_blank" rel="noopener noreferrer">
              <img
                className="project-screenshot"
                src={image}
                alt="Project Screenshot"
              />
            </a>
            <figcaption>Fig. {name} - Screenshot</figcaption>
          </figure>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="project-info">
          <ProjectTags tags={tags} />
          <br />
          <p>{description}</p>
        </Col>
      </Row>
    </article>
  );
};

export default Project;
