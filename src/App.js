import React from 'react';
import logo from './logo.png';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter /> */}
        
        <div className="Coming-soon">
          <h1>COMING SOON!</h1>

          <p>
          </p>

        </div>


        <span>
          <a
            className="App-link"
            href="mailto:hardeman.lewis@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
