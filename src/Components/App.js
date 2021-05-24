import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import LandingPage from './LandingPage';
import GameBoard from './GameBoard';

function App() {
  const [player, setPlayer] = useState('');
  const [landingPage, showLanding] = useState(true);
  const [gameboard, showGameboard] = useState(false);
  const [record, showRecord] = useState(false)

  const playGame = () => {
    showLanding(false);
    showGameboard(true);
  }

  return (
    <div className="App">
      <Header />
      {landingPage &&
        <LandingPage setPlayer={setPlayer} playGame={playGame}/>
      }
      {gameboard && player !== '' &&
        <GameBoard />
      }
    </div>
  );
}

export default App;

// - unload - welcome
// - game starts - toast message ?