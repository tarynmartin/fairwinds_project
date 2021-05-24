import React from 'react';

const LandingPage = ({setPlayer, playGame}) => {
  return (
    <section>
      <h1>PICK YOUR PLAYER</h1>
      <article>
        <button onClick={() => setPlayer('X')}>
          X
        </button>
        <button onClick={() => setPlayer('O')}>
          O
        </button>
      </article>
      <button onClick={playGame}>MATCH ME WITH MY OPPONENT</button>
    </section>
  )
}

export default LandingPage;

// x || o w / bar underneath -> click changes bar
// button to match w/computer