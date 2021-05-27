import React, { useState, useEffect } from 'react';
import './Square.css';

const Square = ({ computer, squareClass, winningSquares, value, index, player, squares, setSquares, setCurrent }) => {

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
  //   console.log(computerChoice)
  //   if (computerChoice) {
  //     const splitSquares = squares.slice();
  //     splitSquares[computerChoice] = player;
  //     setSquares(splitSquares);
  //     value = player;
  //     if (!winningSquares) {
  //       player === 'X' ? setCurrent('O') : setCurrent('X');
  //     }
  //   }
  // }

  const changeSquare = () => {
    console.log('player', player)
    // console.log('computer', computer)
    const splitSquares = squares.slice();
    splitSquares[index] = player;
    setSquares(splitSquares);
    value = player;
    if (!winningSquares){
      player === 'X' ? setCurrent('O') : setCurrent('X');
    }
  }

  // if (computerChoice) {
  //   chooseComputerSquare();
  // }

  return (
    <div>
      {/* {(computerChoice && computerChoice === index) &&
        <div className={className} onChange={() => console.log('here')} >
          <h2>{player}</h2>
        </div>
      } */}
      <div className={className} onClick={() => changeSquare()}>
        <h2 className="square-text">{value}</h2>
      </div>
    </div>
  );
}

export default Square;

// - on win, change background to green