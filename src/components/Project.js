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
    <article className="project-card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
        className="project-title"
      >
        <header>
          <a href={appLink} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        </header>
        <div>
          {frontLink && (
            <ProjectButtons
              Type={backLink ? "front" : "code"}
              Link={frontLink}
            />
          )}
          {backLink && <ProjectButtons Type="back" Link={backLink} />}
          <ProjectButtons Type="app" Link={appLink} />
        </div>
      </div>
      <Row>
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
