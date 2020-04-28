import React from 'react';
import './Header.css';

function Header(props) {
  const happyUnicode = '\u263A';
  const sadUnicode = '\u2639';

  return (
    <div className="header">
      <p className="display">{props.bombCount}</p>
      <button className="reset-btn" onClick={props.restart}>
        <strong>{props.gameOver ? sadUnicode : happyUnicode }</strong>
      </button>
      <p className="display">015</p>
    </div>
  )
}

export default Header;
