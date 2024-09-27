import React from "react";

const GameOver = ({ winner , handelRestart}) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} Won!</p>}
      {!winner && <p> its a draw</p>}

      <p>
        <button onClick={handelRestart}> Restart Again</button>
      </p>
    </div>
  );
};

export default GameOver;
