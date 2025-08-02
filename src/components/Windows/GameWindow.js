import React from 'react';
import Window from './Window';
import { Gamepad2, Zap, Target, Trophy } from 'lucide-react';
import './GameWindow.css';

const GameWindow = ({ isActive, onClose, onFocus }) => {
  return (
    <Window
      title="Game Zone"
      isActive={isActive}
      onClose={onClose}
      onFocus={onFocus}
      size={{ width: 800, height: 600 }}
    >
      <div className="game-container">
        <div className="game-header">
          <Gamepad2 size={48} />
          <h2>Game Zone</h2>
          <p>Coming Soon!</p>
        </div>

        <div className="game-preview">
          <div className="game-card">
            <Zap size={32} />
            <h3>Speed Typer</h3>
            <p>Test your typing speed in this fast-paced challenge</p>
          </div>

          <div className="game-card">
            <Target size={32} />
            <h3>Code Breaker</h3>
            <p>Solve coding puzzles and unlock achievements</p>
          </div>

          <div className="game-card">
            <Trophy size={32} />
            <h3>Memory Matrix</h3>
            <p>Train your memory with pattern recognition</p>
          </div>
        </div>

        <div className="game-footer">
          <p>🎮 New games coming in future updates!</p>
        </div>
      </div>
    </Window>
  );
};

export default GameWindow;