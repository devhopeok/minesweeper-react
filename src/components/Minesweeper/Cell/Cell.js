import React from 'react';
import './Cell.css';

function Cell(props) {
  let { isOpen, value } = props;
  return (
    <div className="cell">
      {value}
    </div>
  )
}

export default Cell;
