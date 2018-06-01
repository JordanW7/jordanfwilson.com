import React from 'react';
import { Row, Col, Affix, Menu } from 'antd';
import './Navigation.css';

// function offsetAnchor() {
//     if(window.location.hash.length !== 0) {
//         window.scrollTo(window.scrollX, window.scrollY - 50);
//     }
// }

// window.addEventListener("hashchange", offsetAnchor);
// window.setTimeout(offsetAnchor, 1);

const Navigation = (props) => {
  return (
    <Row type="flex" justify="center" className='navbar'>
      <Col span={24}>
        <Affix>
          <Menu mode="horizontal" selectedKeys={[]} style={{background: "black", opacity: "0.9"}} theme="dark" className="navbar-items">
            <Menu.Item><a href="#portfolio">My Projects</a></Menu.Item>
            <Menu.Item><a href="#skills">My Skills</a></Menu.Item>
            <Menu.Item><a href="#about">About Me</a></Menu.Item>
          </Menu>
        </Affix>
      </Col>
    </Row>
  );
}

export default Navigation;