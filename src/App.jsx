import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    // Mengambil data tugas dari localStorage saat komponen pertama kali dimuat
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const handleAddTask = () => {
    if (taskInput.trim() === '') return; // Jangan menambahkan tugas kosong

    const newTasks = [...tasks, taskInput];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTaskInput('');

    // Menampilkan notifikasi saat tugas ditambahkan
    showNotification('Task added!', taskInput);
  };

  const showNotification = (title, body) => {
    if (Notification.permission === 'granted') {
      new Notification(title, { body });
    } else {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, { body });
        }
      });
    }
  };

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Vite PWA!</h1>
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
