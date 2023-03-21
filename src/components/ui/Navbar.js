import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar className='navbar' variant='dark' sticky='top' expand="sm">
      <Container>
        <Link className="navbar-brand" to="/">Oslay | Galery</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="text-center">
              <NavLink className="nav-link" aria-current="page" to="/">inicio</NavLink>
              <NavLink className="nav-link" to="/simples">simple</NavLink>
              <NavLink className="nav-link" to="/tripticos">tríptico</NavLink>
              <NavLink className="nav-link" to="/ambientacion">ambientación</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;