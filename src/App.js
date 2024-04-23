// App.js
import React from 'react';
import Sidebar from './Components/Sidebar';
import './App.css';
import ChatApp from './Components/ChatApp';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <ChatApp />
   
    </div>
  );
}

export default App;
