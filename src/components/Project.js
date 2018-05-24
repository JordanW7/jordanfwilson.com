import React from 'react';
import { Row, Col, Button, Tag, Card } from 'antd';
import './Project.css';

const Project = ({ name, description, image, codeLink, appLink, tags }) => {
  return (
  	<Col span={24} className="project_card">
  		<Card title="Project 1 title" extra=
      {<div>
        <a href="" target="_blank" rel="noopener noreferrer">
          <Button icon="github" className="project_button">Code</Button>
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <Button type="primary" className="project_button">Visit</Button>
        </a>
      </div>}>
          <Row type="flex">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="screenshot_box">
                <a href="" target="_blank">
                 <img className="screenshot" src="https://placeimg.com/400/300/tech" height="300" width="400" alt="Example1"/>
                </a>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="app_info">
              <div>
                <Tag>ES6</Tag>
                <Tag>React</Tag>
                <Tag>Node.js</Tag>
                <Tag>Express</Tag>
                <Tag>PostgreSQL</Tag>
              </div>
              <br />
              <p>
                Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula lorem a tristique porta. Pellentesque condimentum ac ante nec facilisis. Cras accumsan sollicitudin dui nec tincidunt. Mauris consectetur ac nibh id elementum. Sed vulputate ex id malesuada ornare. Maecenas laoreet elementum ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ornare ante ligula, et bibendum metus consequat a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
              </Col>
            </Row>
          </Card>
        </Col>
  );
}

export default Project;
