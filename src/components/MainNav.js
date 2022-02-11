import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from '../logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/Main.scss';


export function MainNav() {

  return (
    <div className="main-nav-bar">
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="none" >
          <Navbar.Brand href="/" className="nav-bar-brand">
            <img src={logo} className="main-nav-logo" alt="The Garrison RV Park" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  className="main-nav-toggle" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/mission" className="main-nav-link">Our Mission</Nav.Link>
              {/*   <NavDropdown title="Learn More"  className="nav-bar-link">
                  <NavDropdown.Item href="#action/3.1" >Residents</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Investors</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Make a Donation</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
                </NavDropdown>  */}
              <Nav.Link href="/invest" className="main-nav-link">Invest</Nav.Link>
              <Nav.Link href="/contact" className="main-nav-link">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/dashboard" className="main-nav-link">Customer Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
