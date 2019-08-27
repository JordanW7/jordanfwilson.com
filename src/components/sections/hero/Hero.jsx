import React from "react";
import { Row, Col, Icon } from "antd";
import "../../../Hero.css";

const Header = props => {
  return (
    <header className="herofull" id="home">
      <Row type="flex" align="middle">
        <Col span={24}>
          <p className="hero-intro">Hey there! My name is</p>
          <p className="hero-name">Jordan Wilson.</p>
          <p className="hero-subtitle">
            I'm a Creative Problem Solver and Software Engineer.
          </p>
          <a
            href="http://www.linkedin.com/in/jordanfwilson"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <Icon
              type="linkedin"
              theme="filled"
              style={{ fontSize: 50 }}
              className="hero-icon"
            />
            <span className="contact-text"> Linkedin</span>
          </a>
          <span className="hero-dot">·</span>
          <a
            href="https://github.com/JordanW7"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <Icon
              type="github"
              theme="filled"
              style={{ fontSize: 50 }}
              className="hero-icon"
            />
            <span className="contact-text"> Github</span>
          </a>
          <div className="hero-arrow">
            <a href="#portfolio">﹀</a>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;