import React, { Component } from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import About from './components/About';
import FooterContent from './components/FooterContent';
import './App.css';

class App extends Component {
  render() {
    return (
    	<div className="app">
    		<Hero />
	    	<Portfolio />
	    	<Skills />
	    	<About />
	    	<FooterContent />
    	</div>
    );
  }
}

export default App;
