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

  const restartGame = () => {
    game.reset();
    setUpdated(!updated);
  }

  const reveal = cell => {
    if (game.isOver) return;

    game.reveal(cell);
    setUpdated(!updated);
    console.log('======');
    console.log(game.print());
  }

  const flagHandler = cell => {
    if (cell.hasFlag) {
      game.removeFlag(cell);
    } else {
      game.addFlag(cell);
    }
    setUpdated(!updated);
  }

  return (
    <div className="minesweeper">
      {console.log('render')}
      <Header
        bombCount={game.bombCount - game.flagCount}
        restart={restartGame}
        gameOver={game.isOver}
      />
      <Board board={game.board} reveal={reveal} flag={flagHandler}/>
    </div>
  )
}

export default Minesweeper;
