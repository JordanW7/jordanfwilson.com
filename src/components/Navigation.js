import React, { Component } from "react";
import { Icon } from "antd";
import "./Navigation.css";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false
    };
  }
  handleMenuFold = () => {
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
  };
  render() {
    const { menuOpen } = this.state;
    return (
      <nav>
        <div className="navbar">
          <a className="nav-title" href="#home">
            JORDAN WILSON
          </a>
          <div className="desktop-menu">
            <a className="nav-item" href="#home">
              Home
            </a>
            <a className="nav-item" href="#portfolio">
              Portfolio
            </a>
            <a className="nav-item" href="#skills">
              Skills
            </a>
            <a className="nav-item" href="#about">
              About
            </a>
          </div>
          <div className="mobile-menu-toggle nav-item">
            <Icon
              type={menuOpen ? "menu-fold" : "menu-unfold"}
              onClick={this.handleMenuFold}
            />
          </div>
        </div>
        <div
          className={
            menuOpen ? "mobile-menu mobile-menu-visible" : "mobile-menu"
          }
        >
          <a
            className="mobile-menu-link"
            onClick={this.handleMenuFold}
            href="#home"
          >
            Home
          </a>
          <a
            className="mobile-menu-link"
            onClick={this.handleMenuFold}
            href="#portfolio"
          >
            My Projects
          </a>
          <a
            className="mobile-menu-link"
            onClick={this.handleMenuFold}
            href="#skills"
          >
            My Skills
          </a>
          <a
            className="mobile-menu-link"
            onClick={this.handleMenuFold}
            href="#about"
          >
            About Me
          </a>
        </div>
      </nav>
    );
  }
}

export default Navigation;
