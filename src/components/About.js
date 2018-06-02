import React from 'react';
import { Row, Col, Icon } from 'antd';
import './About.css';

const About = (props) => {
  return (
    <div className="aboutfull">
    <div id="about"></div>
  	<div className="about">
    	<Row type="flex">
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="about-header">
          <span><Icon type="message"  style={{ fontSize: "50" }} /> About Me</span>
    		</Col>
    		<Col xs={0} sm={0} md={12} lg={12} xl={12} className="about-header2">
    			<span className="about-description">Here's why I build.</span>
    		</Col>
        <Col span={24} className="about-card">
        </Col>
        </Row>
      </div>
      </div>
  );
}

export default About;
