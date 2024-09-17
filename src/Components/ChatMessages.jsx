import React from 'react';

const ChatMessage = ({ sender, text }) => {
  return (
    <div className={`message ${sender}`}>
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
