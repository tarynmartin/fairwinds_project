import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import LandingPage from './LandingPage';
import GameBoard from './GameBoard';

function App() {
  const [player, setPlayer] = useState('');
  const [landingPage, showLanding] = useState(true);
  const [gameboard, showGameboard] = useState(false);
  // const [record, showRecord] = useState(false)
  const [currentPlayer, setCurrent] = useState('');
  const [computer, setComputer] = useState('');
  // const [computerChoice, setChoice] = useState(null);
  const [squares, setSquares] = useState([null, null, null, null, null, null, null, null, null]);
  const [winningSquares, setWinning] = useState(null);

  // const randomNum = () => {
  //   return Math.floor(Math.random() * squares.length); 
  // }

  // const findComputerChoice = () => {
  //   if (currentPlayer !== '' && currentPlayer === computer) {
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
  // }, [currentPlayer])

  useEffect(() => {
    const possibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (var i = 0; i < possibleWins.length; i++) {
      const a = possibleWins[i][0];
      const b = possibleWins[i][1];
      const c = possibleWins[i][2];
      if (squares[a] && squares[b] && squares[c]) {
        if (squares[a] === squares[b] && squares[a] === squares[c]) {
          setWinning(possibleWins[i])
          setCurrent(squares[a])
          return true;
        }
      }
    }

    return false;
  }, [squares])

  // if currentPlayer === computer, have computer play a turn
  // dependency in useEffect?

  const playGame = () => {
    setCurrent(player)
    if (player === 'X') {
      setComputer('O')
    } else {
      setComputer('X')
    }

    showLanding(false);
    showGameboard(true);
  }

  return (
    <div className="App">
      <Header page={landingPage}/>
      {landingPage &&
        <LandingPage setPlayer={setPlayer} playGame={playGame}/>
      }
      {gameboard && player !== '' &&
        <GameBoard 
        winningSquares={winningSquares} 
        computer={computer} 
        player={currentPlayer} 
        squares={squares} 
        setSquares={setSquares} 
        setCurrent={setCurrent}/>
      }
    </div>
  );
}

export default App;

// - game starts - toast message ?