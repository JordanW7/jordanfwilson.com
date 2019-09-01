import React from "react";
import { Icon } from "antd";
import styled from "styled-components";

const Card = styled.div`
  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid white;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const CardTitle = styled.div`
  font-weight: 300;
  color: white;
  padding: 5px;
  font-size: 25px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 40;
    margin-right: 10px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 23px;
    border-right: 1px solid white;
    width: 200px;
    height: 100%;
    flex-shrink: 0;
  }
  @media only screen and (max-width: 767px) {
    border-bottom: 1px solid white;
  }
`;

const CardDetails = styled.div`
  color: white;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  padding: 5px;
  @media only screen and (min-width: 768px) {
    font-size: 30px;
    margin: 0 auto;
  }
  @media only screen and (max-width: 767px) {
    padding: 10px;
  }
`;

const SkillCard = ({ name, description, icon }) => {
  return (
    <Card>
      <CardTitle>
        <Icon type={icon} />
        {name}
      </CardTitle>
      <CardDetails>{description}</CardDetails>
    </Card>
  );
};

export default SkillCard;
