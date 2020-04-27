import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <div className="header">
      <p className="display">{props.bombCount}</p>
      <button>Start</button>
      <p className="display">015</p>
    </div>
  )
}

export default Header;
