import React from 'react';
import Window from '../Windows/Window';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import './BioModal.css';

const BioModal = ({ isActive, onClose, onFocus }) => {
  return (
    <Window
      title="About Me"
      isActive={isActive}
      onClose={onClose}
      onFocus={onFocus}
      size={{ width: 950, height: 750 }}
    >
      <div className="bio-container">
        <div className="bio-header">
          <div className="bio-image">
            <img 
              src="/joe-photo.jpg"
              srcSet="/joe-photo.jpg"
              alt="Joe Ramirez"
            />
          </div>
          <div className="bio-intro">
            <h1>Joe Ramirez</h1>
            <h2>Full Stack Software Engineer</h2>
            <p className="tagline">Building beautiful, functional web experiences</p>
          </div>
        </div>

        <div className="bio-content">
          <section className="bio-section">
            <h3>About Me</h3>
            <p>
              I'm a full stack software engineer with a unique background in visual design, 
              IT, and customer experience. I specialize in creating clean, accessible designs 
              while bringing a bit of fun into everything I build.
            </p>
            <p>
              With 15 years of expertise in creating meaningful user-centered experiences, 
              I develop full-stack applications using the MERN stack that are both 
              user-friendly and modern. I believe in making things that look good and work well!
            </p>
            <p>
              My approach combines curiosity and kindness with strategic problem-solving. 
              Drawing from my diverse background as a videographer, logistics producer, 
              competitive athlete, and software engineer, I bring a unique perspective 
              to every project.
            </p>
          </section>

          <section className="bio-section">
            <h3>Contact Information</h3>
            <div className="contact-grid">
              <div className="contact-item">
                <Mail size={20} />
                <span>joeramirez07@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <span>661-754-2322</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>San Francisco Bay Area</span>
              </div>
              <div className="contact-item">
                <Github size={20} />
                <a href="https://github.com/joeramirez07" target="_blank" rel="noopener noreferrer">
                  github.com/joeramirez07
                </a>
              </div>
              <div className="contact-item">
                <Linkedin size={20} />
                <a href="https://linkedin.com/in/josephramirez07" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/joeramirez
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Window>
  );
};

export default BioModal;