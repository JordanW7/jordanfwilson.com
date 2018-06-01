import React from 'react';
import { Row, Col, Icon } from 'antd';
import './Hero.css';
import Navigation from './Navigation';

const Header = (props) => {
  return (
    <div className="hero-full">
    <Navigation />
  	<Row type="flex" align="middle">
  		<Col span={24}>
        <p className="hero-intro">Hey there! My name is</p>
        <p className="hero-name">Jordan Wilson.</p>
        <p className="hero-subtitle">I'm a Creative Problem Solver and Full Stack Javascript Developer.</p>
      		<a href='http://www.linkedin.com/in/jordanfwilson' target="_blank" rel="noopener noreferrer" className="contact-link">
            <Icon type="linkedin" style={{ fontSize: 50 }} className="hero-icon"/> 
      		  <span className="contact-text"> Linkedin</span>
          </a>
          <a href='https://github.com/JordanW7' target="_blank" rel="noopener noreferrer" className="contact-link">
            <Icon type="github" style={{ fontSize: 50 }} className="hero-icon"/>
            <span className="contact-text"> Github</span>
          </a>
      		<a href='' className="contact-link">
            <Icon type="mail" style={{ fontSize: 50 }} className="hero-icon"/>
            <span className="contact-text"> Contact Me</span>
          </a>
        <div className="hero-arrow"><a href="#portfolio">﹀</a></div>
        </Col>
  	</Row>
    </div>
  );
}

export default Header;
