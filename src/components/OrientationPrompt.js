import React, { useState, useEffect } from 'react';
import { Smartphone, RotateCw } from 'lucide-react';
import './OrientationPrompt.css';

const OrientationPrompt = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const [hasSeenPrompt, setHasSeenPrompt] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth <= 768;
      const isPortrait = window.innerHeight > window.innerWidth;
      
      if (isMobile && isPortrait && !hasSeenPrompt) {
        setShowPrompt(true);
      } else {
        setShowPrompt(false);
      }
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, [hasSeenPrompt]);

  const handleDismiss = () => {
    setShowPrompt(false);
    setHasSeenPrompt(true);
  };

  if (!showPrompt) return null;

  return (
    <div className="orientation-overlay" onClick={handleDismiss}>
      <div className="orientation-prompt">
        <div className="phone-icon">
          <Smartphone size={60} className="phone-vertical" />
          <RotateCw size={30} className="rotate-arrow" />
        </div>
        
        <h2>Turn Your Phone</h2>
        <p>For the best Mac OS X experience</p>
        
        <div className="orientation-message">
          <span className="emoji">🖥️</span>
          <span>Rotate to landscape mode to see the full desktop</span>
          <span className="emoji">🖥️</span>
        </div>
        
        <button className="orientation-button" onClick={handleDismiss}>
          Continue in Portrait
        </button>
        
        <p className="orientation-hint">
          Tap anywhere to dismiss
        </p>
      </div>
    </div>
  );
};

export default OrientationPrompt;