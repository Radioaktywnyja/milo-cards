import React from 'react';

import Menu from './Menu';

import logo from './../../assets/images/logo.png';

function Sidebar() {
  return(
    <div className="sidebar">
      <img src={logo} alt="logo" className="logo" />
      <Menu />
      <span className="footer">Built with <a href="https://deckofcardsapi.com/">deckofcardsapi.com</a></span>
    </div>
  );
}

export default Sidebar;
