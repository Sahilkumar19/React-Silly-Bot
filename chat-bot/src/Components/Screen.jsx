import React, { useState } from "react";
import ChatMessage from "./UserInput";
import BotTransformations from "./BotTransformations";
import "./ChatApp.css";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };
      setMessages([...messages, userMessage]);

      // Simulate a bot response after a delay
      setTimeout(() => {
        const botMessage = { sender: "bot", text: input }; // Passing input to BotTransformations
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }, 1000);

      setInput(""); // Clear input after sending
    }
  };

  return (
    <div className="chat-app">
      <div className="chat-container">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>

      {/* Rendering bot transformation */}
      {messages.length > 0 && messages[messages.length - 1].sender === "bot" && (
        <BotTransformations text={messages[messages.length - 1].text} />
      )}
    </div>
  );
};

export default ChatApp;
