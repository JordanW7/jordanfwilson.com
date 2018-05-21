import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './Portfolio.css';

function Portfolio(props) {
  return (
  	<div className="projects">
  	<Row type="flex">
      <Col span={12} className="projects_header">
        <h1>My Projects</h1>
  		</Col>
  		<Col span={12}>
  			<h2>Here's some of the things I've built</h2>
  		</Col>
  		<Col span={24}>
  			<h4>Project 1 Title</h4>
  		</Col>
  		<Col span={12}>
  		    <img src="" height="300" width="300" alt="Example1"/>
      </Col>
      <Col span={12}>
        <p>
          Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula lorem a tristique porta. Pellentesque condimentum ac ante nec facilisis. Cras accumsan sollicitudin dui nec tincidunt. Mauris consectetur ac nibh id elementum. Sed vulputate ex id malesuada ornare. Maecenas laoreet elementum ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ornare ante ligula, et bibendum metus consequat a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </Col>
  	</Row>
  	</div>
  );
}

export default Portfolio;
