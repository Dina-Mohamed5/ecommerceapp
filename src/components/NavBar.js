// copy from website => react bootstrap

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

function NavBar(){
  const cart = useSelector((state) => state.cart)
    return (
    <>
    <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to='/' href="#home" className='navbar-brand'>CartApp</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' href="#home" className='nav-link'>Products</Link>
            <Link to='/cart' href="#link" className='nav-link'>Cart {cart.length}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default NavBar;