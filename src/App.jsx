import React, { useState } from 'react';
import Screen from './Components/Screen';
import UserInput from './Components/UserInput';
import Sidebar from './Components/Sidebar';
import BotTransformations from './Components/BotTransformations';
import './Components/CustomStyles.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const addMessage = (message) => {
    const now = new Date();
    const timestamp = now.toLocaleTimeString();
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sender: 'user', timestamp }
    ]);
    setTimeout(() => {
      const botResponse = BotTransformations(message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: 'bot', timestamp: now.toLocaleTimeString() }
      ]);
    }, 1000);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <Sidebar 
        isDarkMode={isDarkMode}
        onThemeToggle={handleThemeToggle}
        chatHistory={messages}
      />
      <div className="chat-container">
        <Screen messages={messages} />
        <UserInput onSend={addMessage} />
      </div>
    </div>
  );
}

export default App;
