import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'antd';
import './TopContent.css';

function Header(props) {
  return (
  	<Row type="flex" align="middle" className="TopContent">
  		<Col span={24}>
        <p className="preheader">Hey there! My name is</p>
        <p className="header">Jordan Wilson.</p>
        <p className="postheader">I'm a Creative Problem Solver and Full Stack Javascript Developer.</p>
  		</Col>
  		<Col span={24}>
        <div className="center">
      		<Icon type="linkedin" style={{ fontSize: 50 }} className="contact_icon"/> 
      		<span className="contact_link padright">Linkedin</span>
      		<Icon type="github" style={{ fontSize: 50 }} className="contact_icon"/>
      		<span className="contact_link padright">Github</span>
      		<Icon type="mail" style={{ fontSize: 50 }} className="contact_icon"/>
      		<span className="contact_link">Contact Me</span>
        </div>
  		</Col>
  	</Row>
  );
}

export default Header;
