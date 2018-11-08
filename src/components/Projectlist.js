import React from 'react';
import Project from './Project';

const projectArray = [
{
  name: "HermesCS",
  description: "This app is for operating a Contact Centre. HermesCS helps manage customer info and record, manage and complete customer service requests in a fast and modern way. The app will work both in the office or out in the field on any kind of device.",
  image: "/screenshots/hermescs.jpg",
  frontLink: "https://github.com/JordanW7/HermesCS",
  backLink: "https://github.com/JordanW7/HermesCS-api",
  appLink: "https://hermescs.xyz",
  tags: ["ES6", "React", "Redux", "Node.js", "Express", "PostgreSQL", "Redis", "bcrypt", "JWT", "Docker", "Prettier", "CircleCI"]
},
{
  name: "Face Recognition",
  description: "This app detects faces in pictures using Clarifai's AI API. It also has a register/signin system and a basic profile that counts and displays user submissions.",
  image: "/screenshots/facerecognition.jpg",
  frontLink: "https://github.com/JordanW7/face-recognition",
  backLink: "https://github.com/JordanW7/face-recognition-backend",
  appLink: "https://facerecognition77.herokuapp.com/",
  tags: ["ES6", "React", "Node.js", "Express", "PostgreSQL"]
}
]

const ProjectList = () => {
  return(
    <div>
      {
      projectArray.map((project, i) => {
        return (
          <Project
                  key={i}
                  name={projectArray[i].name}
                  description={projectArray[i].description}
                  image={projectArray[i].image}
                  frontLink={projectArray[i].frontLink}
                  backLink={projectArray[i].backLink}
                  appLink={projectArray[i].appLink}
                  tags={projectArray[i].tags}
          />
        );
      })
    }
    </div>
  )
}

export default ProjectList;