import React, { useEffect, useState } from 'react';
import Header from './Header';
import Cell from './Cell';
import Game from '../../helper/Game';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const InnerWrapper = styled.div`
  display: inline-block;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const game = new Game(9, 9, 10);

function Minesweeper() {
  const [updated, setUpdated] = useState(false);

  useEffect(() => {}, [updated])

  const restartGame = () => {
    game.reset();
    setUpdated(!updated);
  }

  const reveal = cell => {
    if (game.isOver) return;

    game.reveal(cell);
    setUpdated(!updated);
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
    <Wrapper>
      <InnerWrapper>
        <Header
          bombCount={game.bombCount - game.flagCount}
          restart={restartGame}
          gameOver={game.isOver}
          />
        <div className="board">
          { game.board.map((row, id) =>
            <Row key={id}>
              {row.map((col, id) =>
                <Cell
                  key={id}
                  cell={col}
                  reveal={reveal}
                  flag={flagHandler}
                />
              )}
            </Row>
          )}
        </div>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Minesweeper;
