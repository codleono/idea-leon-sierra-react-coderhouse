import React from "react";
import '../App.css';
import CartWidget from "./CartWidget"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";


const NavBar = () => {
  return (
    <>
      <Navbar bg="white" variant="white">
        <Container>
          <Navbar.Brand href="#home">Mi TieNda</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Nosotros</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar
