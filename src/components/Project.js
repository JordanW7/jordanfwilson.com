import React from 'react';
import { Row, Col, Button } from 'antd';
import ProjectTags from './ProjectTags';
import './Project.css';

const Project = ({ name, description, image, codeLink, appLink, tags }) => {
  return (
    <Row className="project-card"> 
        <Col span={24} className="project-title">
          <div style={{"float": "left"}}>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">{name}</a>
          </div>
          <div style={{"float": "right"}}>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <Button icon="github" className="project-button">Code</Button>
          </a>
          <a href={appLink} target="_blank" rel="noopener noreferrer">
            <Button type="primary" className="project-button">Visit</Button>
          </a>
          </div>
        </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="project_content">
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
