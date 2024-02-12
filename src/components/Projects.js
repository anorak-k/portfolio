import React from 'react';
import ProjectCard from './ProjectCard'

const projectData = [
  { title: "Project 1", description: "This project aim to whatever sdjfnjksd", color: "#DCE775" },
  { title: "Project 2", description: "This project aim to whatever sdjfnjksd", color: "#4DD0E1" },
  { title: "Project 3", description: "This project aim to whatever sdjfnjksd", color: "#FF8A65" },
  { title: "Project 4", description: "This project aim to whatever sdjfnjksd", color: "#9575CD" },
  { title: "Project 5", description: "This project aim to whatever sdjfnjksd", color: "#3755db" },
];




export const Projects = () => {
  return (
    <div className="projects-section">
      <div className="projects-container">
        <h1>My Projects</h1>
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div></div>
  );
};
