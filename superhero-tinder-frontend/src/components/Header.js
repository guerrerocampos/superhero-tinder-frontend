import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../assets/LogoGif.gif';
import '../App.css';
import HeroIndex from '../pages/HeroIndex';
import About from '../pages/About';

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Navbar color="dark" light id="navbar">
          <img src = {logo} className = "logo" />
          <NavItem>
              <NavLink path="/heroindex" component={ HeroIndex }  id = "header-text">Explore</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" id = "header-text">Sign In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink path="/about" component={ About } id = "header-text">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" id = "header-text">Contact </NavLink>
            </NavItem>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://guerrerocampos.com" id = "header-text">My Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://linkedin.com/in/guerrero-campos" id = "header-text">LinkedIn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/guerrerocampos" id = "header-text">Github</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://instagram.com/urban_lgnd" id = "header-text">Instagram</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;