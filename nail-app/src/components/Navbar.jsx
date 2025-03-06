import React from 'react';
import { NavBar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <Navbar expand="lg" bg="light" variant="light">
        <Container className="px-4 px-lg-5">
          <Navbar.Brand href="/" style={{ fontFamily: "'Playwrite AU SA', serif" }}>
            Nailed It!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto ms-lg-4">
              <Nav.Link href="/" className="text-dark">Home</Nav.Link>
              <NavDropdown title="Shop" id="navbarDropdown">
                <NavDropdown.Item href="/favorites">Favorites</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/popular">Popular Items</NavDropdown.Item>
                <NavDropdown.Item href="/sale">Sale Items</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* Cart Button */}
            <Button variant="outline-dark" className="d-flex align-items-center">
              <BsCartFill className="me-1" />
              Cart
              <Badge bg="dark" className="ms-1 rounded-pill">0</Badge>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Header */}
      <header className="bg-dark py-5">
        <Container className="px-4 px-lg-5 my-5 text-center text-white">
          <h1 className="display-4 fw-bolder" style={{ fontFamily: "'Playwrite AU SA', serif" }}>
            Nailed It!
          </h1>
          <p className="lead fw-normal text-white-50 mb-0">
            Good Quality Press-On's for a Great Price
          </p>
        </Container>
      </header>
  );
};

export default NavBar();