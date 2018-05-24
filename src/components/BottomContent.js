import React from 'react';
import { Row, Col, Icon } from 'antd';
import './BottomContent.css';

const Footer = (props) => {
  return (
  	<Row type="flex" className="center">
	  	<Col span={24}>
	  		<a href='http://www.linkedin.com/in/jordanfwilson' target="_blank" rel="noopener noreferrer" className="footer_link padright">
	  			<Icon type="linkedin" style={{ fontSize: 18 }}/><span className="footer_text">Linkedin</span>
	        </a>
	        <a href='https://github.com/JordanW7' target="_blank" rel="noopener noreferrer" className="footer_link padright">
	            <Icon type="github" style={{ fontSize: 18 }} className="icon_pad"/><span className="footer_text">Github</span>
	        </a>
	  		<a href='' className="footer_link padright">
	  			<Icon type="mail" style={{ fontSize: 18 }} className="icon_pad"/><span className="footer_text"> Contact Me</span>
	  		</a>
	  		<span className="footer_link">
	  			<Icon type="copyright" style={{ fontSize: 15 }}/> 2018 Jordan Wilson
	  		</span>
	  	</Col>
  	</Row>
  );
}

export default Footer;
