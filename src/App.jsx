import React, { useState } from 'react';
import ChatWindow from '../src/components/ChatWindow';
import MessageInput from '../src/components/MessageInput';
import Bot from '../src/components/Bot';
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
      const botResponse = Bot(message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, sender: 'bot', timestamp: now.toLocaleTimeString() }
      ]);
    }, 1000);
  };

  return (
    <div className="app">
        <div className="chat-container">
          <ChatWindow messages={messages} />
          <MessageInput onSend={addMessage} />
        </div>
    </div>
    
  );
}

export default App;
