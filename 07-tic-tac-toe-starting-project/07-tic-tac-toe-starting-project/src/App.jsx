import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winniing_combinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [players , setPlayers] = useState({
    X:'Player 1',
    O:'Player 2'
  })
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurms, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurms)

  const gameBoard = [...initialGameBoard.map(array => [...array])];
  for (const turn of gameTurms) {

    const {square, player} = turn;
    const {row, col} = square;
    gameBoard[row][col] = player
   
  }

  let winner ;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thiredSquareSymbol = gameBoard[combination[2].row][combination[2].column];


    if(
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thiredSquareSymbol){

      winner = players[firstSquareSymbol];
      }
  }

  const hasDraw = gameTurms.length === 9 && !winner
  const handelSelectPlayer = (rowIndex, colIndex) => {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns); 
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  const handelRestart= () => {
    setGameTurns([])
  }


  function handelPlayerNameChange(symbol, newName){
    setPlayers((prev) => {
      return {
        ...prev,
        [symbol] : newName

      }
    })

  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} onNameChange={handelPlayerNameChange}/>
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O" } onNameChange={handelPlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} handelRestart={handelRestart} />}
        <GameBoard onSelectSquare={handelSelectPlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurms} />
    </main>
  );
}

export default App;
