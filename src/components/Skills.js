import React from 'react';
import { Row, Col, Card, Icon, Tag } from 'antd';
import './Skills.css';

const Skills = (props) => {
  return (
    <div className="skillsfull">
  	<div className="skills">
    	<Row type="flex">
        <Col span={12} className="projects_header">
          <h1><Icon type="code-o"  style={{ fontSize: "50" }} /> My Dev Skills</h1>
    		</Col>
    		<Col span={12} className="projects_header2">
    			<h2>Here's how I build.</h2>
    		</Col>
        </Row>
        <Row gutter={16} type="flex" justify="center">
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="skillbox">
        <Card title={<span><Icon type="desktop" style={{ fontSize: 20}} /> Front-End Development</span>}>
              HTML5 · CSS3 · JS · ES6 · React · Redux
        </Card>
        </Col>

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
