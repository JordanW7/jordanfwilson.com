import React, { Component } from 'react';
import TopContent from './components/TopContent';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import About from './components/About';
import BottomContent from './components/BottomContent';
import './App.css';

import { Layout, Row, Col, Button } from 'antd';

class App extends Component {
  render() {
    return (
    	<div className="App">
        <Navigation />
    		<TopContent />
	    	<Portfolio />
	    	<Skills />
	    	<About />
	    	<BottomContent />
    	</div>
    );
  }
}

export default App;
