import React from "react";
import { Icon } from "antd";
import styled from "styled-components";

const Page = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url(images/bg-hero-3200.jpg);
  text-align: center;
  padding-top: 64px;

  @media (pointer: coarse) {
    background-attachment: initial !important;
  }

  @media only screen and (max-width: 1024px) and (max-resolution: 191dpi) {
    background-image: url(images/bg-hero-1024.jpg);
  }

  @media only screen and (max-width: 1024px) and (min-resolution: 192dpi) {
    background-image: url(images/bg-hero-1920.jpg);
  }

  @media only screen and (min-width: 1025px) and (max-width: 1600px) and (max-resolution: 191dpi) {
    background-image: url(images/bg-hero-1600.jpg);
  }

  @media only screen and (min-width: 1601px) and (max-width: 1920px) and (max-resolution: 191dpi) {
    background-image: url(images/bg-hero-1920.jpg);
  }

  @media only screen and (min-width: 1025px) and (min-resolution: 192dpi),
    screen and (min-width: 1921px) {
    background-image: url(images/bg-hero-3200.jpg);
  }
`;

const Intro = styled.p`
  font-size: 20px;
  margin-bottom: 0;
  color: white;
  font-weight: 300;
`;

const Name = styled.p`
  font-size: 50px;
  font-weight: 300;
  margin-bottom: 50px;
  color: white;
`;

const Description = styled.p`
  font-size: 30px;
  margin-bottom: 50px;
  color: white;
  font-weight: 300;
`;

const LinkRow = styled.div`
  display: flex;
  a:not(:first-child) {
    margin-left: 5px;
    @media only screen and (max-width: 767px) {
      margin-left: 15px;
    }
  }
`;

const Arrow = styled.a`
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 30px;
  opacity: 0.8;
  font-weight: 300;
  :hover {
    opacity: 1;
    text-shadow: 0 0 5px silver;
    transition: opacity 0.25s linear, text-shadow 0.25s linear;
  }
`;

const Link = styled.a`
  font-size: 40px;
  position: relative;
  bottom: 5px;
  opacity: 0.7;
  font-weight: 300;
  :hover {
    opacity: 1;
    text-shadow: 0 0 5px silver;
    transition: opacity 0.25s linear, text-shadow 0.25s linear;
  }
  i {
    font-size: 50px;
  }
`;
const Dot = styled.span`
  font-size: 40px;
  position: relative;
  bottom: 5px;
  padding-left: 5px;
  color: white;
  opacity: 0.7;
  font-weight: 300;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const LinkText = styled.span`
  margin-left: 5px;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const Hero = () => {
  return (
    <Page id="home">
      <Intro>Hey there! My name is</Intro>
      <Name>Jordan Wilson.</Name>
      <Description>
        I'm a Creative Problem Solver and Software Engineer.
      </Description>
      <LinkRow>
        <Link
          href="http://www.linkedin.com/in/jordanfwilson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type="linkedin" theme="filled" />
          <LinkText>Linkedin</LinkText>
        </Link>
        <Dot>·</Dot>
        <Link
          href="https://github.com/JordanW7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type="github" theme="filled" />
          <LinkText>Github</LinkText>
        </Link>
      </LinkRow>
      <Arrow href="#portfolio">﹀</Arrow>
    </Page>
  );
};

export default Hero;
