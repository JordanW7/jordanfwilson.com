import React from 'react';
import Project from './Project';

const projectArray = [
{
  name: "Face Recognition",
  description: "This app detects faces in pictures using Clarifai's AI API. It also has a register/signin system and a basic profile that counts and displays user submissions.",
  image: "/screenshots/image1.jpg",
  frontLink: "https://github.com/JordanW7/face-recognition",
  backLink: "https://github.com/JordanW7/face-recognition-backend",
  appLink: "https://facerecognition77.herokuapp.com/",
  tags: ["ES6", "React", "Node.js", "Express", "PostgreSQL"]
},
{
  name: "Robo Friends",
  description: "A simple app that displays json robot friends that is searchable and uses redux for state management. Uses Jest and Enzymes for testing.",
  image: "/screenshots/image2.jpg",
  frontLink: "https://github.com/JordanW7/robofriends",
  backLink: "",
  appLink: "https://robo-friends7.herokuapp.com/",
  tags: ["ES6", "React", "Redux"]
},
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