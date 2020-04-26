import React from 'react';
import Header from './Header/Header';
import Board from './Board/Board';
import Game from '../../helper/Game';

import './Minesweeper.css';

function Minesweeper() {
  const game = new Game(9, 9, 10);

  game.print();

  return (
    <div className="minesweeper">
      <Header />
      <Board board={game.board} />
    </div>
  )
}

export default Minesweeper;
