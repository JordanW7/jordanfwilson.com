import React from "react";
import { Tag } from "antd";

const ProjectTags = ({ tags }) => {
  return (
    <div>
      {tags.map((tag, i) => {
        return (
          <Tag color="volcano" key={i}>
            {tags[i]}
          </Tag>
        );
      })}
    </div>
  );
};

export default ProjectTags;
