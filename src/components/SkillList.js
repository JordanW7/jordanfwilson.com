import React from 'react';
import SkillCard from './SkillCard';

const skillsArray = [
{
  name: "Front-End Development",
  icon: "desktop",
  description: "· HTML5 · CSS3 · JS · ES6 · React · Redux · Next.js · TypeScript",
},
{
  name: "Back-End Development",
  icon: "database",
  description: "· Node.js · Express · PostgreSQL · Redis",
},
{
  name: "Security",
  icon: "lock",
  description: "· bcrypt",
},
{
  name: "Development Environment",
  icon: "tool",
  description: "· Chrome DevTools · command-line · Git · npm · Webpack · Babel · ESLint · Docker · Jest · Enzyme · Heroku",
},
{
  name: "Architecture Principles",
  icon: "bulb",
  description: "· Responsive web design · Mobile-first development · Performance optimized",
},
]

const SkillList = () => {
  return(
    <div>
      {
      skillsArray.map((skill, i) => {
        return (
          <SkillCard
                  key={i}
                  name={skillsArray[i].name}
                  icon={skillsArray[i].icon}
                  description={skillsArray[i].description}
          />
        );
      })
    }
    </div>
  )
}

export default SkillList;