import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../assets/LogoGif.gif';
import '../App.css';

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar color="dark" light id="navbar">
          <img src = {logo} className = "logo" />
          <NavItem>
              <NavLink href="/components/" id = "header-text">Explore</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" id = "header-text">Sign In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" id = "header-text">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" id = "header-text">Contact </NavLink>
            </NavItem>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/" id = "header-text">My Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" id = "header-text">LinkedIn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" id = "header-text">Github</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" id = "header-text">Instagram</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;