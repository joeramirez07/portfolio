import React, { useState } from 'react';
import Window from './Window';
import ProjectDetailWindow from './ProjectDetailWindow';
import { ExternalLink, Github, Globe } from 'lucide-react';
import './ProjectsWindow.css';

const ProjectsWindow = ({ isActive, onClose, onFocus }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const projects = [
    {
      id: 1,
      name: 'TrackOne',
      description: 'A curated experience platform that helps users explore restaurants, wine bars, and venues based on their vibe, music, and ambiance. Choose a place based on the energy, not just the menu.',
      tech: ['Node.js', 'Express', 'MongoDB', 'EJS'],
      github: 'https://github.com/joeramirez07/trackone',
      live: 'https://trackone-0eba418a86a6.herokuapp.com/',
      image: 'https://imgur.com/xsmouCs.png',
      features: [
        'Mood-based experience discovery',
        'Venue profiles with playlist embeds',
        'Day-of-week categorization',
        'User authentication for venues',
        'Full CRUD functionality'
      ],
      role: 'Full-stack developer - Designed and built the entire application from concept to deployment.',
      challenges: 'The main challenge was creating an intuitive way to categorize venues by "vibe" rather than traditional metrics. I solved this by implementing a mood-based tagging system and integrating music streaming APIs.'
    },
    {
      id: 2,
      name: 'GolfSpot',
      description: 'Golf group management platform that helps golfers create, organize, and manage golf groups and outings. Features user authentication, group management, and scheduling.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/joeramirez07/golfspot',
      live: 'https://swinglink-3564006bf37d.herokuapp.com/',
      image: 'https://imgur.com/sJtUFQd.png',
      features: [
        'Create and manage golf groups',
        'Schedule outings and tee times',
        'Member management system',
        'Responsive mobile design',
        'Secure authentication'
      ],
      role: 'Sole developer - Built this MERN stack application to help golf communities stay connected.',
      challenges: 'Implementing a calendar system that could handle recurring events and conflicting schedules was complex. I used a combination of MongoDB aggregation and frontend state management to create a smooth experience.'
    },
    {
      id: 3,
      name: 'Super Sweat',
      description: 'Django-powered web app for gaming communities to build and manage guilds. Features member management, custom roles, event scheduling, and RSVP tracking.',
      tech: ['Django', 'PostgreSQL', 'Python', 'JavaScript'],
      github: 'https://github.com/joeramirez07/super-sweat',
      live: 'https://super-sweat-587284064cdd.herokuapp.com/',
      image: 'https://i.imgur.com/pOmuScL.png',
      features: [
        'Custom role system (Leader, Officer, Member)',
        'Event scheduling with templates',
        'RSVP and attendance tracking',
        'Member approval system',
        'Profile avatars and external account linking'
      ],
      role: 'Full-stack developer using Django and PostgreSQL to create a comprehensive guild management system.',
      challenges: 'Building a flexible permission system that could handle different guild structures was challenging. I implemented a custom Django permission system with role-based access control.'
    },
    {
      id: 4,
      name: 'Wordle Clone',
      description: 'Browser-based word puzzle game that challenges your vocabulary. Guess the 5-letter word in 6 tries with color-coded feedback.',
      tech: ['JavaScript', 'HTML', 'CSS', 'CardStarter'],
      github: 'https://github.com/joeramirez07/Wordle',
      live: 'https://joeramirez07.github.io/Wordle/',
      image: 'https://i.imgur.com/TZsNVfV.png',
      features: [
        'Daily word challenges',
        'Color-coded feedback system',
        'Keyboard input tracking',
        'Win/loss statistics',
        'Mobile-friendly design'
      ],
      role: 'Frontend developer - Created this game using vanilla JavaScript to practice DOM manipulation and game logic.',
      challenges: 'Implementing the word validation and creating smooth animations for the tile reveals required careful timing with JavaScript. I used CSS transitions and JavaScript promises to create the signature Wordle experience.'
    }
  ];

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setShowDetail(true);
  };

  const handleBackToProjects = () => {
    setShowDetail(false);
    setSelectedProject(null);
  };

  if (showDetail && selectedProject) {
    return (
      <ProjectDetailWindow
        project={selectedProject}
        isActive={isActive}
        onClose={onClose}
        onFocus={onFocus}
        onBack={handleBackToProjects}
      />
    );
  }

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
                  <button 
                    className="project-btn"
                    onClick={() => handleViewDetails(project)}
                  >
                    View Details
                  </button>
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