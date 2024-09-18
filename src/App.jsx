import React, { useState } from 'react';
import Screen from '../src/components/Screen';
import UserInput from '../src/components/UserInput';
import BotTransformations from '../src/components/BotTransformations';
import './styles.css';

function App() {
  const [setIsChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);

  const startChat = () => {
    setIsChatVisible(true);
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
    <div className="app">
        <div className="chat-container">
          <Screen messages={messages} />
          <UserInput onSend={addMessage} />
        </div>
    </div>
    
  );
}

export default App;
