import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'antd';
import './TopContent.css';

function Header(props) {
  return (
  	<Row type="flex" align="middle" className="TopContent">
  		<Col span={24}>
  			<h1>Jordan Wilson - Full Stack Javascript Developer</h1>
  		</Col>
  		<Col span={24}>
  		<Icon type="linkedin" style={{ fontSize: 50 }}/> 
  		<h2>Linkedin</h2>
  		<Icon type="github" style={{ fontSize: 50 }}/>
  		<h2>Github</h2>
  		<Icon type="mail" style={{ fontSize: 50 }}/>
  		<h2> Contact Me</h2>
  		</Col>
  		<Col span={24}>
  		</Col>
  	</Row>
  );
}

export default Header;
