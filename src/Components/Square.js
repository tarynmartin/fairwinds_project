import React, { useState, useEffect } from 'react';
import './Square.css';

const Square = ({ choice, computer, squareClass, winningSquares, value, index, player, squares, setSquares, setCurrent }) => {

  // const [computerChoice, setChoice] = useState(null);
  const className = squareClass;

  // const randomNum = () => {
  //   return Math.floor(Math.random() * squares.length);
  // }

  // const findComputerChoice = () => {
  //   console.log(squares)
  //   if (player !== '' && player === computer) {
  //     let choice = randomNum();
  //     if (squares[choice] === null) {
  //       setChoice(choice)
  //     } else {
  //       findComputerChoice()
  //     }
  //   }
  //   console.log('computerChoice', computerChoice);
  // }

  // useEffect(() => {
  //   findComputerChoice();
  // }, [squares])

  // const chooseComputerSquare = () => {
  //   console.log(choice)
  //   if (choice) {
  //     const splitSquares = squares.slice();
  //     splitSquares[choice] = player;
  //     setSquares(splitSquares);
  //     value = player;
  //     if (!winningSquares) {
  //       player === 'X' ? setCurrent('O') : setCurrent('X');
  //     }
  //   }
  // }

  const changeSquare = () => {
    // console.log('player', player)
    // console.log('computer', computer)
    const splitSquares = squares.slice();
    // could have just made a copy to change?
    splitSquares[index] = player;
    setSquares(splitSquares);
    value = player;
    if (!winningSquares){
      player === 'X' ? setCurrent('O') : setCurrent('X');
    }
  }

  // if (choice) {
  //   chooseComputerSquare();
  // }

  return (
    <div>
      {(choice && choice === index) &&
        <div className={className} onChange={() => console.log('here')} >
          <h2>{player}</h2>
        </div>
      }
      <div className={className} onClick={() => changeSquare()}>
        <h2 className="square-text">{value}</h2>
      </div>
    </div>
  );
}

export default Square;

// - on win, change background to green