import React from 'react';
import './CustomStyles.css';

function Sidebar({ isDarkMode, onThemeToggle, chatHistory }) {
  return (
    <div className="sidebar">
      {/* Theme toggle section */}
      <div className="sidebar-section">
        <h3>Settings</h3>
        <label className="theme-toggle">
          <input 
            type="checkbox" 
            checked={isDarkMode} 
            onChange={onThemeToggle} 
          />
          Dark Mode
        </label>
      </div>

      {/* Chat history section */}
      <div className="sidebar-section">
        <h3>Chat History</h3>
        <ul className="chat-history">
          {chatHistory.length === 0 ? (
            <li>No chat history</li>
          ) : (
            chatHistory.map((msg, index) => (
              <li key={index} className={`history-item ${msg.sender}`}>
                {msg.sender}: {msg.text}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;