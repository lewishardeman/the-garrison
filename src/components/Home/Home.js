import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import '../../scss/Main.scss';
//import { Counter } from '../../features/counter/Counter';
import logo from '../../logo.png';
import Army_Seal from '../../img/Army_Seal.png';
import Air_Force_Seal from '../../img/Air-Force-Seal.png';
import Navy_Seal from '../../img/NavySeal.png';
import Marines_Seal from '../../img/Marines-Seal.png';
import Space_Force_Seal from '../../img/Space-Force-Seal.png';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Home() {

    return (
        <div className="Home">

          <div>
            <img src={logo} className="App-logo" alt="The Garrison RV Park" />
          </div>


          <Container>
{/*             <h1 className="page-title">
              COMING SOON
            </h1> */}

            <h2 className="article-title">
              A community for Veterans, First Responders, and Patriots
            </h2>

            <div className="learn-more-button">
              <a href="/mission">LEARN MORE</a>
            </div>
          </Container>

{/*           <Container>
            <Row>
              <Col ><img src={Army_Seal} className="App-logo" alt="The Garrison RV Park" /></Col>
              <Col ><img src={Navy_Seal} className="App-logo" alt="The Garrison RV Park" /></Col>
              <Col ><img src={Marines_Seal} className="App-logo" alt="The Garrison RV Park" /></Col>
              <Col ><img src={Air_Force_Seal} className="App-logo" alt="The Garrison RV Park" /></Col>
              <Col ><img src={Space_Force_Seal} className="App-logo" alt="The Garrison RV Park" /></Col>
            </Row>
          </Container> */}
          
          
        </div>
    );
}

export default Home;