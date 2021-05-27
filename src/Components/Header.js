import React from 'react';
import './Header.css';

const Header = ({ page }) => {
  return (
    <header>
      {page && 
        <h1 className="welcome">WELCOME</h1>
      }
    </header>
  )
}

export default Header;

