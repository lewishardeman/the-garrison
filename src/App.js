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
          <h1>COMING SOON</h1>
          <h3>A community for Veterans, First Responders, and Patriots</h3>
        </div>


        <span className="temp-home-links">
          <h3>


            <a
              className="App-link"
              href="mailto:hardeman.lewis@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              INVEST
            </a>

            <a
              className="App-link"
              href="mailto:hardeman.lewis@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              DONATE
            </a>

            <a
              className="App-link"
              href="mailto:hardeman.lewis@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LEARN MORE
            </a>

          </h3>

        </span>
      </header>
    </div>
  );
}

export default App;
