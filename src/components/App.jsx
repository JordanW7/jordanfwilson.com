import React from "react";
import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";
import About from "./sections/about/About";
import Footer from "./sections/footer/Footer";
import Navigation from "./sections/navigation/Navigation";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <main>
        <Projects />
        <Skills />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
