import React, { useState } from 'react';
import ChatHeader from './components/ChatHeader';
import ChatBody from './components/ChatBody';
import ChatInput from './components/ChatInput';
import Sidebar from './components/Sidebar';


function App() {
  const [messages, setMessages] = useState([
    { text: "Hello, how are you?", sender: "me", timestamp: "12:45 PM" },
    { text: "I'm fine, thank you!", sender: "them", timestamp: "12:46 PM" }
  ]);

  const [currentChat, setCurrentChat] = useState("John Doe");

  // Function to handle sending a new message
  const handleSendMessage = (newMessage) => {
    setMessages([...messages, { text: newMessage, sender: "me", timestamp: new Date().toLocaleTimeString() }]);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="hidden lg:flex w-1/3 border-r">
        <Sidebar setCurrentChat={setCurrentChat} />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <ChatHeader currentChat={currentChat} />

        {/* Chat Body */}
        <ChatBody messages={messages} />

        {/* Chat Input */}
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;
