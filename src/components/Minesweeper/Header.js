import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Display = styled.p`
  display: inline-block;
  background-color: black;
  color: red;
  font-size: 20px;
`;

const ResetButton = styled.button`
  font-size: 40px;
  font-weight: bold;
`;

function Header(props) {
  const happyUnicode = '\u263A';
  const sadUnicode = '\u2639';
  const { bombCount, restart, gameOver } = props;

  const formatDisplay = (num) => {
    if (num < 0) num = 0;

    return num < 10 ? `00${num}` : `0${num}`;
  }

  return (
    <Wrapper className="header">
      <Display className="display">{formatDisplay(bombCount)}</Display>
      <ResetButton className="reset-btn" onClick={restart}>
        {gameOver ? sadUnicode : happyUnicode }
      </ResetButton>
      <Display className="display">015</Display>
    </Wrapper>
  )
}

export default Header;
