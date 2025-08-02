import React, { useState, useEffect } from 'react';
import { X, Minus, Square } from 'lucide-react';
import './Window.css';

const Window = ({ 
  title, 
  children, 
  isActive, 
  onClose, 
  onFocus,
  initialPosition = { x: 100, y: 100 },
  size = { width: 600, height: 400 }
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Center window on mount and mobile
    const centerWindow = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      if (window.innerWidth <= 768) {
        setPosition({
          x: (windowWidth - size.width) / 2,
          y: (windowHeight - size.height) / 2
        });
      } else {
        // Center on desktop too
        setPosition({
          x: Math.max(50, (windowWidth - size.width) / 2),
          y: Math.max(50, (windowHeight - size.height) / 2)
        });
      }
    };
    
    centerWindow();
    window.addEventListener('resize', centerWindow);
    
    return () => window.removeEventListener('resize', centerWindow);
  }, [size]);

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-controls')) return;
    
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
    onFocus();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  const windowStyle = {
    width: window.innerWidth <= 768 ? '90%' : size.width,
    height: window.innerWidth <= 768 ? 'auto' : size.height,
    maxHeight: window.innerWidth <= 768 ? '80vh' : 'none',
    left: window.innerWidth <= 768 ? '5%' : position.x,
    top: window.innerWidth <= 768 ? '10%' : position.y,
    zIndex: isActive ? 1000 : 100
  };

  if (isMinimized) return null;

  return (
    <div 
      className={`window ${isActive ? 'active' : ''}`}
      style={windowStyle}
      onClick={onFocus}
    >
      <div 
        className="window-header"
        onMouseDown={handleMouseDown}
      >
        <div className="window-controls">
          <button className="control-btn close" onClick={onClose}>
            <X size={10} />
          </button>
          <button className="control-btn minimize" onClick={() => setIsMinimized(true)}>
            <Minus size={10} />
          </button>
          <button className="control-btn maximize">
            <Square size={8} />
          </button>
        </div>
        <div className="window-title">{title}</div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  );
};

export default Window;