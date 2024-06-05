import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>Welcome to Dhaara Live Dashboard!</h1>
    <div className="header-buttons">
      <button>Download User Manual</button>
      <button>Download All Calibration Certificate</button>
    </div>
  </header>
);

export default Header;
