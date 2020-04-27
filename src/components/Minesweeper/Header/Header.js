import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <div className="header">
      <p className="display">{props.bombCount}</p>
      <button onClick={props.restart}><strong>{props.gameOver ? 'T_T' : '^_^'}</strong></button>
      <p className="display">015</p>
    </div>
  )
}

export default Header;
