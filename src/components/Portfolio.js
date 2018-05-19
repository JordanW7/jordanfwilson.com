import React, { Component } from 'react';
import { Row, Col } from 'antd';

function Portfolio(props) {
  return (
  	<div className="projects">
  	<Row>
  		<Col span={12}>
  			<h1>My Projects</h1>
  		</Col>
  		<Col span={12}>
  			<h2>Here's some of the things I've built</h2>
  		</Col>
  		<Col span={24}>
  			<h4>Project 1 Title</h4>
  		</Col>
  		<Col span={12}>
  		<img src="" height="300" width="300" />

  		</Col>
  	</Row>
  	</div>
  );
}

export default Portfolio;
