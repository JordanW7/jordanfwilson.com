import React from 'react';
import Project from './Project';

const projectArray = [
{
  name: "Project1",
  description: "Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula lorem a tristique porta. Pellentesque condimentum ac ante nec facilisis. Cras accumsan sollicitudin dui nec tincidunt. Mauris consectetur ac nibh id elementum. Sed vulputate ex id malesuada ornare. Maecenas laoreet elementum ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ornare ante ligula, et bibendum metus consequat a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  image: "https://placeimg.com/400/300/tech",
  frontLink: "http://google.com",
  backLink: "",
  appLink: "http://google.com",
  tags: ["ES6", "React", "Node.js", "Express", "PostgreSQL"]
},
{
  name: "Project2",
  description: "Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula lorem a tristique porta. Pellentesque condimentum ac ante nec facilisis. Cras accumsan sollicitudin dui nec tincidunt. Mauris consectetur ac nibh id elementum. Sed vulputate ex id malesuada ornare. Maecenas laoreet elementum ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ornare ante ligula, et bibendum metus consequat a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  image: "https://placeimg.com/400/300/tech",
  frontLink: "http://google.com",
  backLink: "http://google.com",
  appLink: "http://google.com",
  tags: ["ES6", "React", "Node.js", "Express", "PostgreSQL"]
},
{
  name: "Project3",
  description: "Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula lorem a tristique porta. Pellentesque condimentum ac ante nec facilisis. Cras accumsan sollicitudin dui nec tincidunt. Mauris consectetur ac nibh id elementum. Sed vulputate ex id malesuada ornare. Maecenas laoreet elementum ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ornare ante ligula, et bibendum metus consequat a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  image: "https://placeimg.com/400/300/tech",
  frontLink: "",
  backLink: "",
  appLink: "http://google.com",
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