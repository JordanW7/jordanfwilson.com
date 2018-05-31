import React from 'react';
import { Row, Col, Icon } from 'antd';
import './SkillCard.css';

const SkillCard = ({ name, description, icon }) => {
  return (
    <Col span={24} className="skills-card">
          <Row type="flex" justify="center" align="middle">
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="skills-title">
            <p><Icon type={icon} style={{ fontSize: 40}} />{name}</p>
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={18} className="skills-details">
            <p className="skills_list">{description}</p>
            </Col>
          </Row>
        </Col>
  );
}

export default SkillCard;
