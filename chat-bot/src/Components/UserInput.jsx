import React from "react";
import "./ChatMessage.css";

const ChatMessage = ({ message, sender }) => {
  return (
    <div className={`message ${sender}`}>
      <div className={`message-content ${sender}`}>
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;
