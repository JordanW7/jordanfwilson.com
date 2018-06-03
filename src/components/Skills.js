import React from 'react';
import { Row, Col, Icon } from 'antd';
import SkillList from './SkillList';
import './Skills.css';

const Skills = (props) => {
  return (
    <div className="skillsfull">
    	<div className="skills">
      	<Row type="flex">
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="skills-header">
            <span id="skills"><Icon type="code-o"  style={{ fontSize: "50" }} /> My Dev Skills</span>
      		</Col>
      		<Col xs={0} sm={0} md={12} lg={12} xl={12} className="skills-header2">
      			<span className="skills-description">Here's how I build.</span>
      		</Col>
          <SkillList />
        </Row>
      </div>
    </div>
  );
}

export default Skills;
