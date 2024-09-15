import React,{useState} from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, index) => (
        <li key={index}>
          <ol>
            {row.map((playerSybol, index) => (
              <li key={index}>
                <button>{playerSybol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
