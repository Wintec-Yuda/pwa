import React from 'react';
import './App.css';

function App() {
  const handleNotification = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        new Notification('Hello! This is a notification from your PWA!');
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Vite PWA!</h1>
        <button onClick={handleNotification}>Notify Me!</button>
      </header>
    </div>
  );
}

export default App;
