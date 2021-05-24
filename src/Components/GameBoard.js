import React from 'react';
import Square from './Square';
import './GameBoard.css';

const GameBoard = () => {

  return (
    <section class="game">
      <div class="message">
        <h1>hello!</h1>
      </div>
      <article class="gameboard">
        <div class="row">
          <Square />
          <Square />
          <Square />
        </div>
        <div class="row">
          <Square />
          <Square />
          <Square />
        </div>
        <div class="row">
          <Square />
          <Square />
          <Square />
        </div>
        {/* iterate & create 9 squares */}
      </article>
      {/* set conditional to render on win */}
      <div>
        <button>
          PLAY AGAIN
        </button>
        <button>
          SEE RECORD
        </button>
      </div>
    </section>
  )
}

export default GameBoard;