import React from 'react';
import { Row, Col, Icon, Card } from 'antd';
import './About.css';

const About = (props) => {
  return (
  	<div className="about">
    	<Row type="flex">
        <Col span={12}>
          <h1><Icon type="message"  style={{ fontSize: "50" }} /> About Me</h1>
    		</Col>
    		<Col span={12}>
    			<h2>Here's why I build.</h2>
    		</Col>
        <Col span={24} className="about_card">
        <Card>
        Text
        </Card>
        </Col>
        </Row>
      </div>
  );
}

export default About;
