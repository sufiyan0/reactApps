import React, { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({onSelectSquare , board}) => {

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSybol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex,colIndex)} disabled={playerSybol !== null}>
                  {playerSybol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
