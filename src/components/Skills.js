import React from 'react';
import { Row, Col, Icon } from 'antd';
import SkillList from './SkillList';
import './Skills.css';

const Skills = (props) => {
  return (
    <div className="skillsfull">
      <div id="skills"></div>
    	<div className="skills">
      	<Row type="flex">
          <Col span={12} className="skills-header">
            <span><Icon type="code-o"  style={{ fontSize: "50" }} /> My Dev Skills</span>
      		</Col>
      		<Col span={12} className="skills-header2">
      			<span>Here's how I build.</span>
      		</Col>
          <SkillList />
        </Row>
      </div>
    </div>
  );
}

export default Skills;
