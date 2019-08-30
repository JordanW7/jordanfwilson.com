import React from "react";
import styled from "styled-components";
import { Icon } from "antd";

const Section = styled.section`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-image: url(images/bg-about-3200.jpg);
  padding-bottom: 44px;
  @media only screen and (max-width: 767px) {
    background-image: url(images/bg-mobile-1600.jpg);
  }
  @media (pointer: coarse) {
    background-attachment: initial !important;
  }
  @media only screen and (min-width: 768px) and (max-width: 1600px) and (max-resolution: 191dpi) {
    background-image: url(images/bg-about-1600.jpg);
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) and (min-resolution: 192dpi) {
    background-image: url(images/bg-about-1920.jpg);
  }
  @media only screen and (min-width: 1601px) and (max-width: 1920px) and (max-resolution: 191dpi) {
    background-image: url(images/bg-about-1920.jpg);
  }
  @media only screen and (min-width: 1025px) and (min-resolution: 192dpi),
    screen and (min-width: 1921px) {
    background-image: url(images/bg-about-3200.jpg);
  }
`;

const Experience = () => {
  return (
    <Section>
      <div id="experience" />
    </Section>
  );
};

export default Experience;
