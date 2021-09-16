import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../assets/LogoGif.gif';
import '../App.css';

const  Footer = (props) => {

  return (
    <div className = "footer-div">
      <Navbar color="dark" light>
          <Nav navbar className= 'footerItems'>
            <NavItem>
              <NavLink href="/components/" id = "footer-text" className = "explore">Explore</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" id = "footer-text">Log In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/" id = "footer-text">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" id = "footer-text">Contact </NavLink>
            </NavItem>
          </Nav>
          <img src= {logo} id = "footer-logo" alt = "super tinder logo"/>
        </Navbar>
    </div>
  );
}

export default Footer;