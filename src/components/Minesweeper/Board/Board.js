import React from 'react';
import Cell from '../Cell/Cell';

function Board(props) {
  const { board } = props;

  return (
    <div className="board">
      { board.map((row, id) =>
        <div key={id} className="row">
          {row.map((col, id) => <Cell key={id} {...col} />)}
        </div>
      )}
    </div>
  )
}

export default Board;
