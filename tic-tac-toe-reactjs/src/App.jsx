import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [player, setPlayer] = useState("X");

  const [winner, setWinner] = useState(null);

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (board.flat().every((cell) => cell !== "")) {
      return "draw";
    }

    return null;
  };

  const makeMove = (x, y) => {
    if (winner || board[x][y] !== "") return;

    setBoard((prevBoard) => {
      const updatedBoard = prevBoard.map((row, rowIndex) =>
        rowIndex === x
          ? row.map((col, colIndex) => (colIndex === y ? player : col))
          : row
      );
      return updatedBoard;
    });

    setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  };

  useEffect(() => {
    const result = calculateWinner(board.flat());
    if (result !== null) {
      setWinner(result);
    }
  }, [board]);

  const resetGame = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setPlayer("X");
    setWinner(null);
  };

  return (
    <div>
      <h2>Tic-tac-toe</h2>
      <p>It's {player}'s turn</p>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className="cell"
                onClick={() => makeMove(rowIndex, colIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ marginTop: "24px" }}>
        {winner && winner !== "draw" && <h2>Player {winner} wins!</h2>}
        {winner === "draw" && <h2>It's a draw!</h2>}
        <button onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
}

export default App;
