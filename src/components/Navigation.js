import React from "react";
import "./Navigation.css";

const Navigation = props => {
  return (
    <nav>
      <div className="navbar">
        <a class="nav-title" href="/">
          JORDAN WILSON
        </a>
        <div>
          <a className="nav-item" href="#portfolio">
            My Projects
          </a>
          <a className="nav-item" href="#skills">
            My Skills
          </a>
          <a className="nav-item" href="#about">
            About Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
