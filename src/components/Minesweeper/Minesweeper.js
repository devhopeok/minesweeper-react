import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Board from './Board/Board';
import Game from '../../helper/Game';

import './Minesweeper.css';

const game = new Game(9, 9, 10);

function Minesweeper() {
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    console.log('test effect');
  }, [updated])

  const reveal = cell => {
    if (game.gameOver) return;

    game.reveal(cell);
    setUpdated(!updated);
    console.log('======');
    console.log(game.print());
  }

  return (
    <div className="minesweeper">
      {console.log('render')}
      <Header bombCount={game.bombCount} />
      <Board board={game.board} reveal={reveal} />
      <p><strong>{game.gameOver ? 'Game Over' : ''}</strong></p>
    </div>
  )
}

export default Minesweeper;
