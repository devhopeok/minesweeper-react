import React from 'react';
import './Cell.css';

function Cell(props) {
  const { cell } = props;
  const bombUnicode = '\u2600';
  const flagUnicode = '\u2691';

  const clickHandler = e => {
    if (props.cell.isOpen || props.cell.hasFlag) return;

    props.reveal(props.cell);
  }

  const rightClickHandler = e => {
    e.preventDefault();
    props.flag(props.cell);
  }

  const displayCellContent = () => {
    if (cell.isOpen) {
      if (cell.value === '*') {
        return <span className={`open bomb`}>{bombUnicode}</span>
      } else {
        return <span className={`open val-${cell.value}`}>{cell.value || ''}</span>
      }
    } else if (cell.hasFlag) {
      return <span className="flag">{flagUnicode}</span>
    } else {
      return <span></span>
    }
  }

  return (
    <div className="cell" onClick={clickHandler} onContextMenu={rightClickHandler} >
      {displayCellContent()}
    </div>
  )
}

export default Cell;
