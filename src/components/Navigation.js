import React, { Component } from 'react';
import { Row, Col, Affix, Menu, Icon } from 'antd';
import './Navigation.css';

function Navigation(props) {
  return (
  	<Row type="flex" justify="center">
  		<Col span={24}>
  			<Affix>
  				<Menu mode="horizontal" selectedKeys="[]" className="center">
  					<Menu.Item>My Projects</Menu.Item>
  					<Menu.Item>My Skills</Menu.Item>
  					<Menu.Item>About Me</Menu.Item>
  				</Menu>
  			</Affix>
  		</Col>
  	</Row>
  );
}

export default Navigation;
