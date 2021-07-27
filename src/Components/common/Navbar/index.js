import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn
} from './NavbarElements';

const Navbar = () => {
  const [bg, setBg] = useState(false)

  const listenScrollEvent = () => {
    window.scrollY > 30
    ? setBg(true)
    : setBg(false);

  }

  window.addEventListener("scroll", listenScrollEvent);

  return (
    <>
      <Nav className={bg && 'navbar-bg' }>
        <NavLink to='/'>
          <h2 className="nav-logo">Super Hero</h2>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <div className="navbar-btn">History</div>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
