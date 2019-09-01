import React, { Fragment } from "react";
import Button from "../../common/Button";
import styled from "styled-components";
import { Icon } from "antd";

const StyledButton = styled(Button)`
  i {
    color: rgba(255, 255, 255, 0.9);
    margin-right: 5px;
  }
  margin: 10px 5px;
`;

const ProjectButtons = ({ type, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <StyledButton white outlined>
        {type === "app" ? (
          "Visit"
        ) : (
          <Fragment>
            <Icon type="github" />
            {type}
          </Fragment>
        )}
      </StyledButton>
    </a>
  );
};

export default ProjectButtons;
