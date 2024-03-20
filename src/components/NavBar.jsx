import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Carrito } from "./CartWidget";

export const NavBar = () => (
  <>
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">Argentech</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Merchandising</Nav.Link>
          <Nav.Link href="#">Eventos</Nav.Link>
        </Nav>
        <Carrito />
      </Container>
    </Navbar>
  </>
);
