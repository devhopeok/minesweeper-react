import React from 'react';
import './Cell.css';

function Cell(props) {
  const { cell } = props;
  // const { value } = cell;

  const clickHandler = (e) => {
    if (props.cell.isOpen) return;

    props.reveal(props.cell);
  }

  const displayValue = () => {
    if (cell.isOpen) {
      return <span className={`open val-${cell.value}`}>{cell.value || ''}</span>
    } else {
      return <span></span>
    }
  }

  return (
    <div className="cell" onClick={clickHandler} >
      {displayValue()}
    </div>
  )
}

export default Cell;
