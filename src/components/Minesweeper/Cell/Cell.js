import React from 'react';
import './Cell.css';

function Cell(props) {
  const { cell } = props;

  const clickHandler = e => {
    console.log('click', e);
    if (props.cell.isOpen || props.cell.hasFlag) return;

    props.reveal(props.cell);
  }

  const rightHandler = e => {
    console.log('right', e);
    e.preventDefault();
    props.flag(props.cell);
  }

  const displayValue = () => {
    if (cell.isOpen) {
      if (cell.value === '*') {
        return <span className={`open bomb`}>*</span>
      } else {
        return <span className={`open val-${cell.value}`}>{cell.value || ''}</span>
      }
    } else if (cell.hasFlag) {
      return <span>x</span>
    } else {
      return <span></span>
    }
  }

  return (
    <div className="cell" onClick={clickHandler} onContextMenu={rightHandler} >
      {displayValue()}
    </div>
  )
}

export default Cell;
