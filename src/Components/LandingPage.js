import React from 'react';

const LandingPage = ({setPlayer, playGame}) => {
  return (
    <section>
      <h1>PICK YOUR PLAYER</h1>
      <article>
        <button onClick={() => setPlayer('x')}>
          X
        </button>
        <button onClick={() => setPlayer('o')}>
          O
        </button>
      </article>
      <button onClick={playGame}>MATCH ME WITH MY OPPONENT</button>
    </section>
  )
}

export default LandingPage;

// Pick Your Player
// x || o w / bar underneath -> click changes bar 