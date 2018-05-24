import React, { Component } from 'react';
import { Row, Col, Button, Tag, Card } from 'antd';
import './Portfolio.css';

function Portfolio(props) {
  return (
  	<div className="projects">
  	<Row type="flex">
      <Col span={12} className="projects_header">
        <h1>My Projects</h1>
  		</Col>
  		<Col span={12} className="projects_header2">
  			<h2>Here's some of the things I've built</h2>
  		</Col>
  		<Col span={24}>
      <Card title="Project 1 title" extra={<Button icon="github">View Code</Button>}>
      <Row type="flex">
      <Col span={12}>
        <img className="screenshot" src="https://placeimg.com/400/300/tech" height="300" width="400" alt="Example1"/>
            </Col>
            <Col span={12}>
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
  	</Row>
  	</div>
  );
}

export default Portfolio;
