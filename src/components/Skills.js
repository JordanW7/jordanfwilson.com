import React from 'react';
import { Row, Col, Card, Icon, Tag } from 'antd';
import './Skills.css';

const Skills = (props) => {
  return (
    <div className="skillsfull">
  	<div className="skills">
    	<Row type="flex">
        <Col span={12} className="skills_header">
          <span className="skills_font"><Icon type="code-o"  style={{ fontSize: "50" }} /> My Dev Skills</span>
    		</Col>
    		<Col span={12} className="skills_header2">
    			<span className="skills_font2" >Here's how I build.</span>
    		</Col>
        <Col span={24} className="skills_card">
          <Row>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="skills_title">
            <Icon type="desktop" style={{ fontSize: 50}} /><p>Front-End<br />Development</p>
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={18} className="skills_details">
            <span>HTML5 · CSS3 · JS · ES6 · React · Redux</span>
            </Col>
          </Row>
        </Col>
        </Row>

        <Row gutter={16} type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="skillbox">
        <Card title={<span><Icon type="database" style={{ fontSize: 20}} /> Back-End Development</span>}>
              Node.js · Express · PostgresSQL · JSON
        </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="skillbox">
        <Card title={<span><Icon type="lock" style={{ fontSize: 20}} /> Real-time & Authentication</span>}>
              bcrypt
        </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="skillbox">
        <Card title={<span><Icon type="tool" style={{ fontSize: 20}} /> Development Environment</span>}>
               Chrome DevTools · command-line · Git · npm · Heroku
        </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="skillbox">
        <Card title={<span><Icon type="bulb" style={{ fontSize: 20}} /> Architecture Principles</span>}>
              Responsive web design · Mobile-first development · Cross-browser compatibility
        </Card>
        </Col>

        </Row>
      </div>
      </div>
  );
}

export default Skills;
