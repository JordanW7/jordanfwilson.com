import React from 'react';
import { Row, Col } from 'antd';
import ProjectTags from './ProjectTags';
import ProjectButtons from './ProjectButtons';
import './Project.css';

const Project = ({ name, description, image, frontLink, backLink, appLink, tags }) => {
  return (
    <Row className="project-card"> 
        <Col span={24} className="project-title">
          <div className="project-title-contents">
            <a href={appLink} target="_blank" rel="noopener noreferrer">{name}</a>
          </div>
          <div className="project-buttons">
            <ProjectButtons Type={(backLink ? "front" : "code")} Link={frontLink} />
            <ProjectButtons Type="back" Link={backLink} />
            <ProjectButtons Type="app" Link={appLink} />
          </div>
        </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="project-screenshotbox">
                <a href={appLink} target="_blank">
                 <img className="project-screenshot" src="https://placeimg.com/400/300/tech" height="300" width="400" alt="Example1"/>
                </a>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="project-info">
            <ProjectTags tags={tags}/>
              <br />
              <p>
                Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula lorem a tristique porta. Pellentesque condimentum ac ante nec facilisis. Cras accumsan sollicitudin dui nec tincidunt. Mauris consectetur ac nibh id elementum. Sed vulputate ex id malesuada ornare. Maecenas laoreet elementum ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ornare ante ligula, et bibendum metus consequat a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
              </Col>
        </Row>
  );
}

export default Project;
