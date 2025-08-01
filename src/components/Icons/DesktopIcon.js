import React from 'react';
import './DesktopIcon.css';

const DesktopIcon = ({ name, Icon, position, onClick, isActive }) => {
  return (
    <div
      className={`desktop-icon ${isActive ? 'active' : ''}`}
      style={{ 
        top: position.top, 
        left: position.left,
        position: window.innerWidth <= 768 ? 'relative' : 'absolute'
      }}
      onClick={onClick}
      onTouchEnd={onClick}
    >
      <div className="icon-image">
        <Icon size={48} strokeWidth={1.5} />
      </div>
      <div className="icon-label">{name}</div>
    </div>
  );
};

export default DesktopIcon;