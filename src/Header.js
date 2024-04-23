import {Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div>
         <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_nvabar_wrapper">
            <Link to="/add">Add Product</Link>
            <Link to="/edit">Edit Product</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    );
  }
  
  export default Header;