import React from 'react';
import './CustomStyles.css';
import chatImage from '../assets/meet.jpg';

function Header() {
  return (
    <div className="navbar">
      <div className="chatbot-header">
        <img src={chatImage} alt="MiniMeet" className="logos" />
        <h1>MiniMeet</h1>
      </div>
    </div>
  );
}

export default Header;
