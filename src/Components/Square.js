import React, { useState } from 'react';
import './Square.css';

const Square = ({ squareClass, winningSquares, value, index, player, squares, setSquares, setCurrent }) => {

  const className = squareClass;

  const changeSquare = () => {
    if (value === null) {
      const splitSquares = squares.slice();
      splitSquares[index] = player;
      setSquares(splitSquares);
      value = player;
      if (!winningSquares){
        player === 'X' ? setCurrent('O') : setCurrent('X');
      }
    }
  }

  return (
    <div className={className} onClick={() => changeSquare()}>
      <h2>{value}</h2>
    </div>
  )
}

export default Square;

// - on win, change background to green