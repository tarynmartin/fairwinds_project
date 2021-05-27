import React from 'react';
import './LandingPage.css';

const LandingPage = ({setPlayer, playGame}) => {
  return (
    <section className="landing-page">
      <h2 className="player-title">PICK YOUR PLAYER</h2>
      <article className="btn-section">
        <button className="player-btn" onClick={() => setPlayer('X')}>
          X
        </button>
        <button className="player-btn" onClick={() => setPlayer('O')}>
          O
        </button>
      </article>
      <button className="game-start-btn" onClick={playGame}>MATCH ME WITH MY OPPONENT</button>
    </section>
  )
}

export default LandingPage;

// x || o w / bar underneath -> click changes bar
// button to match w/computer