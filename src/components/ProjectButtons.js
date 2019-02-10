import React from "react";
import { Button } from "antd";

const ProjectButtons = ({ Type, Link }) => {
  if (Link === "") {
    return null;
  }
  if (Type === "app") {
    return (
      <a href={Link} target="_blank" rel="noopener noreferrer">
        <Button size="small" type="primary" className="project-button">
          Visit
        </Button>
      </a>
    );
  }
  if (Type === "code") {
    return (
      <a href={Link} target="_blank" rel="noopener noreferrer">
        <Button size="small" icon="github" className="project-button">
          Code
        </Button>
      </a>
    );
  }
  if (Type === "front") {
    return (
      <a href={Link} target="_blank" rel="noopener noreferrer">
        <Button size="small" icon="github" className="project-button">
          Frontend
        </Button>
      </a>
    );
  }
  if (Type === "back") {
    return (
      <a href={Link} target="_blank" rel="noopener noreferrer">
        <Button size="small" icon="github" className="project-button">
          Backend
        </Button>
      </a>
    );
  }
};

export default ProjectButtons;
