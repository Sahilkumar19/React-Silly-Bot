import React, { useEffect, useRef, useState } from 'react';
import '../styles.css';
import Header from './Header';

function Screen({ messages }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const messagesEndRef = useRef(null);

  const handleThemeChange = (darkMode) => {
    setIsDarkMode(darkMode);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className={`chat-window ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header onThemeChange={handleThemeChange} />
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className="message-content">
              <div className="message-text">{msg.text}</div>
              <div className="timestamp">{msg.timestamp}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default Screen;
