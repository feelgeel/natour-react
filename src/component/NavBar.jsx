import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
        <NavLink to="/movies">
      <Navbar.Brand >Movies</Navbar.Brand>
        </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <NavLink to="/Customers">
          <Nav.Link href="#home">customers</Nav.Link>
        </NavLink>
        <NavLink to="/rentals">
          <Nav.Link  href="#home">Rentals</Nav.Link>
        </NavLink>
        <NavLink to="/login">
          <Nav.Link href="#home" >Login</Nav.Link>
        </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
