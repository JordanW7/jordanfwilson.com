import React, { Fragment } from "react";
import ProjectCard from "./ProjectCard";

const projectArray = [
  // {
  //   name: "Red Sift",
  //   description:
  //     "Currently working for Red Sift as a Software Engineer, working on security apps such as OnDMARC and OnINBOX.",
  //   image: "/screenshots/redsift.jpg",
  //   appLink: "https://redsift.com",
  //   tags: ["JavaScript", "React.js", "Redux", "Node.js", "Python"]
  // },
  {
    name: "jordanfwilson.com",
    description: "",
    image: "/screenshots/portfolio.jpg",
    appLink: "https://jordanfwilson.com",
    frontLink: "https://github.com/JordanW7/jordanfwilson.com",
    tags: ["JavaScript", "ES6", "React", "Styled Components"]
  },
  {
    name: "HermesCS",
    description:
      "This app is a ticketing tool for operating a Contact Centre. HermesCS helps manage customer info and record, manage and complete customer service requests in a fast and modern way. The app will work both in the office or out in the field on any kind of device.",
    image: "/screenshots/hermescs.jpg",
    frontLink: "https://github.com/JordanW7/HermesCS",
    backLink: "https://github.com/JordanW7/HermesCS-api",
    appLink: "https://hermescs.xyz",
    tags: [
      "JavaScript",
      "ES6",
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Docker"
    ]
  },
  {
    name: "Face Recognition",
    description:
      "This app detects faces in pictures using Clarifai's AI API. It also has a register/signin system and a basic profile that counts and displays user submissions.",
    image: "/screenshots/facerecognition.jpg",
    frontLink: "https://github.com/JordanW7/face-recognition",
    backLink: "https://github.com/JordanW7/face-recognition-backend",
    appLink: "https://facerecognition77.herokuapp.com/",
    tags: ["JavaScript", "ES6", "React", "Node.js", "Express.js", "PostgreSQL"]
  }
];

const ProjectList = () => {
  return (
    <Fragment>
      {projectArray.map(
        ({ name, description, image, frontLink, backLink, appLink, tags }) => {
          return (
            <ProjectCard
              key={name}
              name={name}
              description={description}
              image={image}
              frontLink={frontLink}
              backLink={backLink}
              appLink={appLink}
              tags={tags}
            />
          );
        }
      )}
    </Fragment>
  );
};

export default ProjectList;
