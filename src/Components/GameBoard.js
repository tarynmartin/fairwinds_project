import React from 'react';
import Square from './Square';
import './GameBoard.css';

const GameBoard = ({ winningSquares, computer, player, squares, setSquares, setCurrent }) => {
  const createSquares = (i) => {
    const squareClass = winningSquares? "no-click" : "square";
    return (
      <Square 
        computer={computer}
        squareClass={squareClass} 
        winningSquares={winningSquares} 
        value={squares[i]} 
        index={i} 
        player={player} 
        squares={squares} 
        setSquares={setSquares} 
        setCurrent={setCurrent}
      />
    )
  }

  return (
    <section className="game">
      <div className="message">
        {winningSquares && 
          <h1 className="message-title">{player} WINS AGAIN!</h1>
        }
        {!winningSquares && 
          <h1 className="message-title">{player}'S TURN!</h1>
        }
      </div>
      <article className="gameboard">
        <div className="row">
          {createSquares(0)}
          {createSquares(1)}
          {createSquares(2)}
        </div>
        <div className="row">
          {createSquares(3)}
          {createSquares(4)}
          {createSquares(5)}
        </div>
        <div className="row">
          {createSquares(6)}
          {createSquares(7)}
          {createSquares(8)}
        </div>
      </article>
      {winningSquares &&
        <div className="winning-btns">
          <button className="win-btn">
            PLAY AGAIN
          </button>
        <button className="win-btn">
            SEE RECORD
          </button>
        </div>
      }
    </section>
  )
}

export default GameBoard;

// - on win, change winning backgrounds to green; display play again & see record buttons
// - play again takes you to clear gameboard
// - see record takes you to record screen