import React from 'react';
import LoginForm from "./components/LoginForm"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="login-form">
          <LoginForm />
        </div>
        <p>
          Med Cabinet
        </p>
      </header>
    </div>
  );
}

export default App;
