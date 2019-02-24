import React from "react";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import About from "./components/About";
import FooterContent from "./components/FooterContent";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Hero />
      <main>
        <Portfolio />
        <Skills />
        <About />
      </main>
      <FooterContent />
    </div>
  );
};

export default App;
