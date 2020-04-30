import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: lightgrey;
  border: 1px solid grey;
  text-align: center;
  cursor: pointer;
`;

const CellContent = styled.span`
  background-color: ${props => props.open ? 'darkgrey' : 'lightgrey'};
  display: block;
  width: 100%;
  height: 100%;
  font-weight: bold;

  ${props => props.bomb && `background-color: red;`}
  ${props => props.flag && `color: red;`}
  ${props => {
    switch (props.value) {
      case 1: return 'color: blue;'
      case 2: return 'color: green;'
      case 3: return 'color: red;'
      case 4: return 'color: purple;'
      case 5: return 'color: maroon;'
      case 6: return 'color: turquoise;'
      case 7: return 'color: black;'
      case 8: return 'color: lightgrey;'
      default: return 'color: black;'
    }
  }}
`;

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
        return <CellContent open bomb>{bombUnicode}</CellContent>
      } else {
        return <CellContent open value={cell.value}>{cell.value || ''}</CellContent>
      }
    } else if (cell.hasFlag) {
      return <CellContent flag>{flagUnicode}</CellContent>
    } else {
      return <span></span>
    }
  }

  return (
    <Wrapper onClick={clickHandler} onContextMenu={rightClickHandler} >
      {displayCellContent()}
    </Wrapper>
  )
}

export default Cell;
