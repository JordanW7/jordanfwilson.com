import React from 'react';
import { Row, Col, Affix, Menu } from 'antd';
import './Navigation.css';

const Navigation = (props) => {
  return (
  	<Row type="flex" justify="center" className='navContent'>
  		<Col span={24}>
  			<Affix>
  				<Menu mode="horizontal" selectedKeys={[]} className="center">
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
