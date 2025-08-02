import React from 'react';
import Window from './Window';
import { Github, Globe, ArrowLeft, ExternalLink, Code, Database, Palette } from 'lucide-react';
import './ProjectDetailWindow.css';

const ProjectDetailWindow = ({ project, isActive, onClose, onFocus, onBack }) => {
  if (!project) return null;

  // Icon mapping for different tech categories
  const getTechIcon = (tech) => {
    if (['React', 'Vue', 'Angular'].includes(tech)) return <Code size={16} />;
    if (['MongoDB', 'PostgreSQL', 'Firebase'].includes(tech)) return <Database size={16} />;
    if (['CSS', 'Tailwind', 'Material-UI'].includes(tech)) return <Palette size={16} />;
    return <Code size={16} />;
  };

  return (
    <Window
      title={project.name}
      isActive={isActive}
      onClose={onClose}
      onFocus={onFocus}
      size={{ width: 1000, height: 700 }}
    >
      <div className="project-detail-container">
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={20} />
          Back to Projects
        </button>

        <div className="project-detail-header">
          <img 
            src={project.image} 
            alt={project.name}
            className="project-detail-image"
          />
          
          <div className="project-detail-info">
            <h1>{project.name}</h1>
            <p className="project-detail-description">{project.description}</p>
            
            <div className="project-detail-links">
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="detail-link github"
              >
                <Github size={20} />
                View Source Code
              </a>
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="detail-link live"
              >
                <Globe size={20} />
                Live Demo
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="project-detail-content">
          <section className="detail-section">
            <h2>Technologies Used</h2>
            <div className="tech-grid">
              {project.tech.map((tech, index) => (
                <div key={index} className="tech-item">
                  {getTechIcon(tech)}
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2>Project Features</h2>
            <ul className="features-list">
              {project.features ? project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              )) : (
                <>
                  <li>Full-stack application with modern architecture</li>
                  <li>Responsive design for all devices</li>
                  <li>User authentication and authorization</li>
                  <li>RESTful API integration</li>
                  <li>Clean, maintainable code structure</li>
                </>
              )}
            </ul>
          </section>

          <section className="detail-section">
            <h2>My Role</h2>
            <p>{project.role || "As the sole developer on this project, I handled all aspects including design, frontend development, backend architecture, database design, and deployment."}</p>
          </section>

          {project.challenges && (
            <section className="detail-section">
              <h2>Challenges & Solutions</h2>
              <p>{project.challenges}</p>
            </section>
          )}
        </div>
      </div>
    </Window>
  );
};

export default ProjectDetailWindow;