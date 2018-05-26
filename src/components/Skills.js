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
          <Row type="flex" justify="center" align="middle">
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="skills_title">
            <p><Icon type="desktop" style={{ fontSize: 40}} />Front-End Development</p>
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={18} className="skills_details">
            <p className="skills_list">· HTML5 · CSS3 · JS · ES6 · React · Redux</p>
            </Col>
          </Row>
        </Col>

        <Col span={24} className="skills_card">
          <Row type="flex" justify="center" align="middle">
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="skills_title">
            <p><Icon type="database" style={{ fontSize: 40}} />Back-End Development</p>
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={18} className="skills_details">
            <p className="skills_list">· Node.js · Express · PostgreSQL</p>
            </Col>
          </Row>
        </Col>

        <Col span={24} className="skills_card">
          <Row type="flex" justify="center" align="middle">
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="skills_title">
            <p><Icon type="lock" style={{ fontSize: 40}} />Real-time & Authentication</p>
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={18} className="skills_details">
            <p className="skills_list">· bcrypt</p>
            </Col>
          </Row>
        </Col>

        <Col span={24} className="skills_card">
          <Row type="flex" justify="center" align="middle">
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="skills_title">
            <p><Icon type="tool" style={{ fontSize: 40}} />Development Environment</p>
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={18} className="skills_details">
            <p className="skills_list">· Chrome DevTools · command-line · Git · npm · Heroku</p>
            </Col>
          </Row>
        </Col>

        <Col span={24} className="skills_card">
          <Row type="flex" justify="center" align="middle">
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="skills_title">
            <p><Icon type="bulb" style={{ fontSize: 40}} />Architecture Principles</p>
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={18} className="skills_details">
            <p className="skills_list">· Responsive web design · Mobile-first development · Cross-browser compatibility</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </div>
  );
}

export default Skills;
