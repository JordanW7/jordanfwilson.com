import React from "react";
import SkillCard from "./SkillCard";

const skillsArray = [
  {
    name: "Front-End Development",
    icon: "desktop",
    description: "· HTML5 · CSS3 · JS · ES6 · React.js · Redux"
  },
  {
    name: "Back-End Development",
    icon: "database",
    description: "· Node.js · Python · PostgreSQL · Redis"
  },
  {
    name: "Development Environment",
    icon: "tool",
    description:
      "· Docker · CircleCI · Firebase · Heroku · Git · Lint · Chrome DevTools · command-line · npm"
  },
  {
    name: "Architecture Principles",
    icon: "bulb",
    description:
      "· Responsive web design · Mobile-first development · Performance optimized · Keep it simple"
  }
];

const SkillList = () => {
  return (
    <div>
      {skillsArray.map((skill, i) => {
        return (
          <SkillCard
            key={i}
            name={skillsArray[i].name}
            icon={skillsArray[i].icon}
            description={skillsArray[i].description}
          />
        );
      })}
    </div>
  );
};

export default SkillList;
