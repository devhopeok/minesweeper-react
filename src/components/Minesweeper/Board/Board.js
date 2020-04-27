import React from 'react';
import Cell from '../Cell/Cell';
import './Board.css';

function Board(props) {
  const { board, reveal, flag } = props;

  return (
    <div className="board">
      { board.map((row, id) =>
        <div key={id} className="row">
          {row.map((col, id) =>
            <Cell
              key={id}
              cell={col}
              reveal={reveal}
              flag={flag}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default Board;
