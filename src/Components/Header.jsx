import React, { useState } from 'react';
import '../styles.css';
import botImage from '/src/assets/meet.jpg';

function Header({ onThemeChange }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    onThemeChange(!isDarkMode);
  };

  return (
    <div className={`navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="chatbot-header">
      <img src={botImage} alt="MiniMeet" className="logos" />
      <h1>MiniMeet</h1>
      </div>
    </div>
  );
}

export default Header;
