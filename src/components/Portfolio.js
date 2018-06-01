import React from 'react';
import { Row, Col, Icon } from 'antd';
import ProjectList from './ProjectList';
import './Portfolio.css';

const Portfolio = (props) => {
  return (
    <div className="portfoliofull">
    <div id="portfolio"></div>
  	<div className="portfolio">
    	<Row type="flex">
        <Col span={12} className="portfolio-header">
          <span><Icon type="appstore-o"  style={{ fontSize: "50" }} /> My Projects</span>
    		</Col>
    		<Col span={12} className="portfolio-header2">
    			<span>Here's what I build.</span>
    		</Col>
        <ProjectList />
        </Row>
      </div>
      </div>
  );
}

export default Portfolio;
