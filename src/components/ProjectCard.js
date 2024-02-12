import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div 
        className="project-card" 
        style={{ backgroundColor: project.color }} 
        onClick={handleClick}
      >
        <h3 className="project-card-title">{project.title}</h3>
        <div className="project-card-arrow">{"</>"}</div>
      </div>

      {isOpen && (
        <div className="project-popup" style={{ backgroundColor: project.color }}>
          <div className="project-popup-content">
            <button className="project-popup-close" onClick={handleClose}>×</button>
            <h2 className="project-popup-title">{project.title}</h2>
            <p className="project-popup-description">{project.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
