import React from 'react';
import { Button } from 'antd';

const ProjectButtons = ({ Type, Link }) => {
  if (Link === "") { return null }
  if (Type === "app") {
    return (
      <a href={Link} target="_blank" rel="noopener noreferrer"><Button type="primary" className="project-button">Visit</Button></a>
      );
  }
  if (Type === "code") { 
  return (
    <a href={Link} target="_blank" rel="noopener noreferrer"><Button icon="github" className="project-button">Code</Button></a>
  );
  }
  if (Type === "front") { 
  return (
    <a href={Link} target="_blank" rel="noopener noreferrer"><Button icon="github" className="project-button">Front-End</Button></a>
  );
  }
  if (Type === "back") { 
  return (
    <a href={Link} target="_blank" rel="noopener noreferrer"><Button icon="github" className="project-button">Back-End</Button></a>
  );
  }
}

export default ProjectButtons;