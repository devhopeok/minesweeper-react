import React from 'react';
import Cell from '../Cell/Cell';
import './Board.css';

function Board(props) {
  const { board, reveal } = props;

  return (
    <div className="board">
      { board.map((row, id) =>
        <div key={id} className="row">
          {row.map((col, id) => <Cell key={id} cell={col} reveal={reveal} />)}
        </div>
      )}
    </div>
  )
}

export default Board;
