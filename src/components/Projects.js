import React from 'react';
import ProjectCard from './ProjectCard'

const projectData = [
  { title: "Modified ResNet architecture on CIFAR 10", description: "This project aim to whatever sdjfnjksd", color: "#DCE775" },
  { title: "Modern Asteroids game in Java", description: "This project aim to whatever sdjfnjksd", color: "#4DD0E1" },
  { title: "Predicting patients with higher risk of dying with COVID-19", description: "This project aim to whatever sdjfnjksd", color: "#FF8A65" },
  { title: "Remote Health Monitoring System for the Elderly", description: "This project aim to whatever sdjfnjksd", color: "#9575CD" },
  { title: "Analyzing DeepLearning approaches for Spoiler Detection in Text", description: "This project aim to whatever sdjfnjksd", color: "#3755db" },
];



export const Projects = () => {
  return (
    <div className="projects-section">
      <div className="projects-container">
        <h1>Some of my latest projects</h1>
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div></div>
  );
};
