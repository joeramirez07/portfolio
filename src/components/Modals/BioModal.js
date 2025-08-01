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
      size={{ width: 700, height: 500 }}
    >
      <div className="bio-container">
        <div className="bio-header">
          <div className="bio-image">
            <img 
              src="https://via.placeholder.com/200x200/6e8efb/ffffff?text=Your+Photo" 
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
                <span>joe.ramirez@example.com</span>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>New York City, NY</span>
              </div>
              <div className="contact-item">
                <Github size={20} />
                <span>github.com/joeramirez07</span>
              </div>
              <div className="contact-item">
                <Linkedin size={20} />
                <span>linkedin.com/in/joeramirez</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Window>
  );
};

export default BioModal;