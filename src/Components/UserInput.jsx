import React, { useState, useRef } from 'react';
import '../styles.css';
import { FaPaperPlane, FaTimesCircle } from 'react-icons/fa';

function UserInput({ onSend }) {
  const [input, setInput] = useState('');
  const sendButtonRef = useRef(null); 

  const handleSubmit = (e) => {
    e?.preventDefault(); 
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  const handleClearClick = () => {
    setInput('');
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        {input && (
          <button type="button" className="clear-button" onClick={handleClearClick}>
            <FaTimesCircle />
          </button>
        )}
        <button
          type="submit"
          className="send-button"
          ref={sendButtonRef} // Set reference for the send button
        >
          <FaPaperPlane />
        </button>
      </div>
    </form>
  );
}

export default UserInput;
