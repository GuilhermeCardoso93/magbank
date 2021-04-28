import React from 'react';
import { Navbar, Nav, Button, ButtonGroup, NavDropdown, Container } from 'react-bootstrap';
import "./Navbar.scss";
import logo from '../assets/magbanklogo.svg';

const Navigation = () => (
<Navbar variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">
      <img
          src={logo}
          height="30"
          className="d-inline-block align-top"
          alt="Magbank logo"
        />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#cartao">Cartão</Nav.Link>
        <Nav.Link href="#quemsomos">Quem Somos</Nav.Link>
        <Nav.Link href="#faq">FAQ</Nav.Link>
      </Nav>
    <ButtonGroup aria-label="Basic example">
      <Button variant="outline-light"> 
        <NavDropdown title="Acessa minha Conta" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown></Button>
      <Button variant="outline-light">Abra sua Conta</Button>
    </ButtonGroup>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

export default Navigation;