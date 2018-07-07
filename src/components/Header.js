import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="button" to="/">StuyPulse Scout</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">
        Teams
      </NavItem>
      <NavItem eventKey={2} href="#">
        Competitions
      </NavItem>
      <NavItem eventKey={2} href="#">
        Matches
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
