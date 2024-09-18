import React, { useEffect, useRef, useState } from 'react';
import '../styles.css';
import Navbar from './Navbar';
import userImage from '../assets/profile.jpeg'; 
import botImage from '../assets/rk.jpg';

function ChatWindow({ messages }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const messagesEndRef = useRef(null);

  const handleThemeChange = (darkMode) => {
    setIsDarkMode(darkMode);
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={`chat-window ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar onThemeChange={handleThemeChange} />
      <div
        className="messages-container"
        style={{
          backgroundSize: 'cover',  
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          height: '50vh', 
          width: '90%',  
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className="message-content">
              <div className="message-header">
                {msg.sender === 'user' && (
                  <>
                    <span className="username">
                      {msg.username || 'You'}
                      <div className="timestamp">{msg.timestamp}</div>
                    </span>
                  </>
                )}
                {msg.sender === 'bot' && (
                  <>
                    <span className="username">{msg.username || 'MiniMeet'}</span>
                    <div className="timestamp">{msg.timestamp}</div>
                  </>
                )}
              </div>
              <div className="message-text">{msg.text}</div>
            </div>
          </div>
        ))}
        {/* This div will be scrolled into view */}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default ChatWindow;
