import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn
} from './NavbarElements';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [bg, setBg] = useState(false)
  const navigate = useNavigate();
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
        <NavBtn>
          <div className="navbar-btn" onClick={() => navigate('history')}>History</div>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
