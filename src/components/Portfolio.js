import React from 'react';
import { Row, Col } from 'antd';
import ProjectList from './ProjectList';
import './Portfolio.css';

const Portfolio = (props) => {
  return (
  	<div className="portfolio">
    	<Row type="flex">
        <Col span={12} className="projects_header">
          <h1>My Projects</h1>
    		</Col>
    		<Col span={12} className="projects_header2">
    			<h2>Here's what I've built.</h2>
    		</Col>
        <ProjectList />
        </Row>
      </div>
  );
}

export default Portfolio;
