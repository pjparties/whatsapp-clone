import React from 'react';
import '../styles/App.css';
import Sidebar from '../components/sidebar';

function App() {
  return (
    <div className="app">      
      <div className = "app_body">
        <Sidebar />
        {/* CHAT */}
      </div>      
    </div>  
  );
}

export default App;
