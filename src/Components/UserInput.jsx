import React, { useState, useRef } from 'react';
import '../styles.css';

function UserInput({ onSend }) {
  const [input, setInput] = useState('');
  const sendButtonRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <div className="input-container d-flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="form-control"
        />

        {input && (
          <button 
            type="button" 
            className="btn btn-outline-secondary ml-2"
            onClick={handleClearClick}
          >
            Clear
          </button>
        )}

        <button
          type="submit"
          className="btn btn-primary ml-4"
          ref={sendButtonRef}
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default UserInput;
