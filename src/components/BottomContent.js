import React, { Component } from 'react';
import { Icon } from 'antd';

function Footer(props) {
  return (
  	<div className="center">
  	<Icon type="mail" style={{ fontSize: 25 }}/><h6> Contact Me </h6>
  	<Icon type="copyright" style={{ fontSize: 25 }}/><h6> 2018 Jordan Wilson</h6>
  </div>
  );
}

export default Footer;
