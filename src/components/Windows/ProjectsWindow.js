import React from 'react';
import Window from './Window';
import { ExternalLink, Github, Globe } from 'lucide-react';
import './ProjectsWindow.css';

const ProjectsWindow = ({ isActive, onClose, onFocus }) => {
  const projects = [
    {
      id: 1,
      name: 'TrackOne',
      description: 'A curated experience platform that helps users explore restaurants, wine bars, and venues based on their vibe, music, and ambiance. Choose a place based on the energy, not just the menu.',
      tech: ['Node.js', 'Express', 'MongoDB', 'EJS'],
      github: 'https://github.com/joeramirez07/trackone',
      live: 'https://trackone-0eba418a86a6.herokuapp.com/',
      image: 'https://imgur.com/xsmouCs.png'
    },
    {
      id: 2,
      name: 'GolfSpot',
      description: 'Golf group management platform that helps golfers create, organize, and manage golf groups and outings. Features user authentication, group management, and scheduling.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/joeramirez07/golfspot',
      live: 'https://swinglink-3564006bf37d.herokuapp.com/',
      image: 'https://imgur.com/sJtUFQd.png'
    },
    {
      id: 3,
      name: 'Super Sweat',
      description: 'Django-powered web app for gaming communities to build and manage guilds. Features member management, custom roles, event scheduling, and RSVP tracking.',
      tech: ['Django', 'PostgreSQL', 'Python', 'JavaScript'],
      github: 'https://github.com/joeramirez07/super-sweat',
      live: 'https://super-sweat-587284064cdd.herokuapp.com/',
      image: 'https://i.imgur.com/pOmuScL.png'
    },
    {
      id: 4,
      name: 'Wordle Clone',
      description: 'Browser-based word puzzle game that challenges your vocabulary. Guess the 5-letter word in 6 tries with color-coded feedback.',
      tech: ['JavaScript', 'HTML', 'CSS', 'CardStarter'],
      github: 'https://github.com/joeramirez07/Wordle',
      live: 'https://joeramirez07.github.io/Wordle/',
      image: 'https://i.imgur.com/TZsNVfV.png'
    }
  ];

  return (
    <Window
      title="My Projects"
      isActive={isActive}
      onClose={onClose}
      onFocus={onFocus}
      size={{ width: 1100, height: 750 }}
    >
      <div className="projects-container">
        <div className="projects-header">
          <h2>Web Development Projects</h2>
          <p>A collection of my recent work showcasing full-stack development skills</p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay">
                  <button className="project-btn">View Details</button>
                </div>
              </div>
              
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <Globe size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
};

export default ProjectsWindow;