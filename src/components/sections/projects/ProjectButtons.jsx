import React from "react";
import Button from "../../common/Button";
import styled from "styled-components";
import { Icon } from "antd";

const StyledButton = styled(Button)`
  i {
    color: rgba(255, 255, 255, 0.9);
    margin-right: 5px;
  }
  margin: 0px 5px;
`;

const ProjectButtons = ({ type, link }) => {
  if (type === "app") {
    return (
      <a>
        <StyledButton
          white
          outlined
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit
        </StyledButton>
      </a>
    );
  }
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <StyledButton white outlined className="project-button">
        <Icon type="github" />
        {type}
      </StyledButton>
    </a>
  );
};

export default ProjectButtons;
