import React, { useState } from 'react';
import DesktopIcon from '../Icons/DesktopIcon';
import BioModal from '../Modals/BioModal';
import ProjectsWindow from '../Windows/ProjectsWindow';
import GameWindow from '../Windows/GameWindow';
import { User, FolderOpen, Gamepad2 } from 'lucide-react';
import './Desktop.css';

const Desktop = ({ activeWindow, setActiveWindow }) => {
  const [windows, setWindows] = useState({
    bio: false,
    projects: false,
    game: false
  });

  const handleIconClick = (windowName) => {
    setWindows(prev => ({
      ...prev,
      [windowName]: true
    }));
    setActiveWindow(windowName);
  };

  const handleCloseWindow = (windowName) => {
    setWindows(prev => ({
      ...prev,
      [windowName]: false
    }));
    setActiveWindow(null);
  };

  const icons = [
    {
      id: 'bio',
      name: 'About Me',
      Icon: User,
      position: { top: 50, left: 30 }
    },
    {
      id: 'projects',
      name: 'My Projects',
      Icon: FolderOpen,
      position: { top: 150, left: 30 }
    },
    {
      id: 'game',
      name: 'Game Zone',
      Icon: Gamepad2,
      position: { top: 250, left: 30 }
    }
  ];

  return (
    <div className="desktop">
      {/* Desktop Icons */}
      {icons.map(icon => (
        <DesktopIcon
          key={icon.id}
          name={icon.name}
          Icon={icon.Icon}
          position={icon.position}
          onClick={() => handleIconClick(icon.id)}
          isActive={activeWindow === icon.id}
        />
      ))}

      {/* Windows/Modals */}
      {windows.bio && (
        <BioModal
          isActive={activeWindow === 'bio'}
          onClose={() => handleCloseWindow('bio')}
          onFocus={() => setActiveWindow('bio')}
        />
      )}

      {windows.projects && (
        <ProjectsWindow
          isActive={activeWindow === 'projects'}
          onClose={() => handleCloseWindow('projects')}
          onFocus={() => setActiveWindow('projects')}
        />
      )}

      {windows.game && (
        <GameWindow
          isActive={activeWindow === 'game'}
          onClose={() => handleCloseWindow('game')}
          onFocus={() => setActiveWindow('game')}
        />
      )}
    </div>
  );
};

export default Desktop;