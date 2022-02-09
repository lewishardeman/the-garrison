import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
//import { Counter } from '../../features/counter/Counter';
import logo from '../../logo.png';




function Home() {

    return (
        <div className="Home">

          <div>
            <img src={logo} className="App-logo" alt="The Garrison RV Park" />
          </div>
          
          <div className="temp-page-name">
            COMING SOON
          </div>

          <div className="temp-page-text">
            <h2>A community for Veterans, First Responders, and Patriots</h2>
          </div>

          <div className="temp-page-name">
            <h5>
              <a
                className="App-link"
                href="/mission"
              >
                LEARN MORE
              </a>
            </h5>
          </div>
          
        </div>
    );
}

export default Home;