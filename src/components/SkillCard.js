import React from "react";
import { Row, Col, Icon } from "antd";
import "./SkillCard.css";

const SkillCard = ({ name, description, icon }) => {
  return (
    <article>
      <Col span={24} className="skills-card">
        <Row type="flex" justify="center" align="middle">
          <Col xs={24} sm={24} md={6} lg={6} xl={6} className="skills-title">
            <header>
              <Icon type={icon} style={{ fontSize: 40 }} />
              {name}
            </header>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={18}
            lg={18}
            xl={18}
            className="skills-details"
          >
            <span className="skills_list">{description}</span>
          </Col>
        </Row>
      </Col>
    </article>
  );
};

export default SkillCard;
