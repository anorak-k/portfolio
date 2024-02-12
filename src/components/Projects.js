import React from 'react';
import ProjectCard from './ProjectCard'


const projectData = [
  { title: "Modified ResNet architecture on CIFAR 10", description: "This project aim to whatever sdjfnjksd", color: "#DCE775",tags: ["Research", "DL"]},
  { title: "Modern Asteroids game in Java", description: "This project aim to whatever sdjfnjksd", color: "#4DD0E1", tags: ["OOP", "Java"] },
  { title: "Predicting patients with higher risk of dying with COVID-19", description: "This project aim to whatever sdjfnjksd", color: "#FF8A65",tags: ["ML", "Python"] },
  { title: "Remote Health Monitoring System for the Elderly", description: "This project aim to whatever sdjfnjksd", color: "#9575CD", tags: ["Systems Engineering"]},
  { title: "Analyzing DeepLearning approaches for Spoiler Detection", description: "This project aim to whatever sdjfnjksd", color: "#3755db", tags: ["Research", "Python"] },
];



export const Projects = () => {
  return (
    <div className="projects-section" id='projects'>
      <div className="projects-container">
        <h1>Some of my latest projects</h1>
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div></div>
  );
};
