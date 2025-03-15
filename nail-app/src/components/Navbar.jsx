import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown' 
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles.css';


const NavBar = () => {
    return (
      // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //       <div className="container px-4 px-lg-5">
      //           <a className="navbar-brand text-white" style="font-family: 'Playwrite AU SA', serif;" href="index.html">Nailed It!</a>
      //           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      //           <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //               <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
      //                   <li className="nav-item"><a class="nav-link active text-white" aria-current="page" href="index.html">Home</a></li>
      //                   {/* <!-- I want to make this where my generator goes -->
      //                   <!-- <li className="nav-item"><a class="nav-link" href="#!">About</a></li> --> */}
      //                   <li className="nav-item dropdown">
      //                       <a className="nav-link dropdown-toggle text-white" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
      //                       <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      //                           <li><a className="dropdown-item" href="favorites.html">Favorites</a></li>
      //                           <li><hr className="dropdown-divider"/></li>
      //                           <li><a className="dropdown-item" href="popular.html">Popular Items</a></li>
      //                           <li><a className="dropdown-item" href="sale.html">Sale Items</a></li>
      //                       </ul>
      //                   </li>
      //               </ul>
      //               <form className="d-flex">
      //                   <a href="cart.html" className="btn btn-outline-light btn-lg " role="button" aria-disabled="true">
                        
      //                       <i className="bi-cart-fill me-1"></i>
      //                       Cart
      //                       <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        
      //               </a>
      //               </form>
      //           </div>
      //       </div>
      //   </nav>


        <Navbar expand="xxl" className="bg-dark">
        <Container className="px-4 px-lg-5">
          <Navbar.Brand href="/" style={{ fontFamily: "'Playwrite AU SA', serif", color: 'white'}}>
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
              <i className='bi-cart-fill me-1'></i>
              Cart
              <Badge className="bg-dark ms-1 rounded-pill">0</Badge>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>    
  );
};

export default NavBar;