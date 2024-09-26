import { useState } from 'react';

export default function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage(''); // Clear the input after sending
    }
  };

  return (
    <div className="bg-gray-200 p-4 flex items-center space-x-4">
      <button className="p-2"><i className="fas fa-smile"></i></button>
      <input
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 p-2 rounded-full bg-white border border-gray-300 focus:outline-none"
      />
      <button onClick={handleSend} className="p-2"><i className="fas fa-paper-plane"></i></button>
    </div>
  );
}
