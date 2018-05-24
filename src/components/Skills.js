import React from 'react';
import { Row, Col } from 'antd';
import './Project.css';

const Skills = (props) => {
  return (
  	<div>
    	<Row type="flex">
        <Col span={12}>
          <h1>My Dev Skills</h1>
    		</Col>
    		<Col span={12}>
    			<h2>Here's how I build.</h2>
    		</Col>
        </Row>
      </div>
  );
}

export default Skills;
