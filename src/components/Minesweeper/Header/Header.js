import React from 'react';
import './Header.css';

function Header(props) {
  const happyUnicode = '\u263A';
  const sadUnicode = '\u2639';
  const { bombCount, restart, gameOver } = props;

  const formatDisplay = (num) => {
    if (num < 0) num = 0;

    return num < 10 ? `00${num}` : `0${num}`;
  }

  return (
    <div className="header">
      <p className="display">{formatDisplay(bombCount)}</p>
      <button className="reset-btn" onClick={restart}>
        <strong>{gameOver ? sadUnicode : happyUnicode }</strong>
      </button>
      <p className="display">015</p>
    </div>
  )
}

export default Header;
