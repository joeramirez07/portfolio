import React, { useState, useEffect } from 'react';
import { Apple, Wifi, Battery, Volume2 } from 'lucide-react';
import './TopBar.css';

const TopBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="apple-menu">
          <Apple size={14} />
        </div>
        <span className="menu-item">Finder</span>
        <span className="menu-item">File</span>
        <span className="menu-item">Edit</span>
        <span className="menu-item">View</span>
        <span className="menu-item">Go</span>
        <span className="menu-item">Window</span>
        <span className="menu-item">Help</span>
      </div>
      
      <div className="topbar-right">
        <Volume2 size={16} className="menu-icon" />
        <Wifi size={16} className="menu-icon" />
        <Battery size={16} className="menu-icon" />
        <span className="time">
          {formatDate(currentTime)} {formatTime(currentTime)}
        </span>
      </div>
    </div>
  );
};

export default TopBar;