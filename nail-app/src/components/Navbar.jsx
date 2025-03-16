import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown' 
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useCart } from '../context/ShopContext';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  const  {cart}  = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <Navbar expand="xxl" className="">
        <Container className="px-4 px-lg-5 bg-light">
          <Navbar.Brand href="/" style={{ fontFamily: "'Playwrite AU SA', serif", color: 'white'}}>
            Nailed It!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto ms-lg-4">
              <Nav.Link href="/" className="text-dark">Home</Nav.Link>
              <NavDropdown title="Shop" id="navbarDropdown">
                <NavDropdown.Item> <NavLink to="/favorites">Favorites</NavLink></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item> <NavLink to="/PopularPage">Popular Items</NavLink></NavDropdown.Item>
                <NavDropdown.Item> <NavLink to="/sale">Sale</NavLink></NavDropdown.Item>
              </NavDropdown>
            </Nav>

          {/* Cart Button */}
          <>
            <NavLink to="/CartPage">
            <Button variant="outline-dark" className="bg-dark d-flex align-items-center" >
              <i className='bi-cart-fill me-1'></i>
              Cart{" "}
              <Badge className="bg-dark ms-1 rounded-pill">{cartCount}</Badge>
            </Button>
            </NavLink>
            </>
          </Navbar.Collapse>
        </Container>
      </Navbar>    
  );
};

export default NavBar;