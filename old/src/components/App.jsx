import React, { Fragment } from "react";
import Hero from "./sections/hero/Hero";
import Footer from "./sections/footer/Footer";
import Navigation from "./sections/navigation/Navigation";

import Experience from "./sections/experience/Experience";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";
import About from "./sections/about/About";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Hero />
      <main>
        <Experience />
        <Projects />
        <Skills />
        <About />
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
