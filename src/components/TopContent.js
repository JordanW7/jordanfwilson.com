import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import './TopContent.css';

function Header(props) {
  return (
  	<Row type="flex" align="middle" className="TopContent">
  		<Col span={24}>
        <p className="preheader">Hey there! My name is</p>
        <p className="header">Jordan Wilson.</p>
      <Col span={24}>
        <p className="postheader">I'm a Creative Problem Solver and Full Stack Javascript Developer.</p>
      </Col>
      </Col>
      <Col span={24}>
        <div className="center">
      		<a href='http://www.linkedin.com/in/jordanfwilson' target="_blank" className="contact_link padright">
            <Icon type="linkedin" style={{ fontSize: 50 }}/> 
      		  <span className="contact_text">Linkedin</span>
          </a>
          <a href='https://github.com/JordanW7' target="_blank" className="contact_link padright">
            <Icon type="github" style={{ fontSize: 50 }} className="icon_pad"/>
            <span className="contact_text">Github</span>
          </a>
      		<a href='' className="contact_link">
            <Icon type="mail" style={{ fontSize: 50 }} className="icon_pad"/>
            <span className="contact_text">Contact Me</span>
          </a>
        </div>
  		</Col>
  	</Row>
  );
}

export default Header;
