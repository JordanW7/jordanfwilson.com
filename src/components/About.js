import React from 'react';
import { Row, Col } from 'antd';
import './About.css';

const About = (props) => {
  return (
  	<div>
    	<Row type="flex">
        <Col span={12}>
          <h1>About Me</h1>
    		</Col>
    		<Col span={12}>
    			<h2>Here's why I build.</h2>
    		</Col>
        </Row>
      </div>
  );
}

export default About;
