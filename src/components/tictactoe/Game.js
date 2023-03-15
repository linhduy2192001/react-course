import React, { useState } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyles.css";

const Game = () => {
  //   const [board, setBoard] = useState(Array(9).fill(null));
  //     const [xIsNext, setXIsNext] = useState(true);

  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
  });
  const winner = calculateWinner(state.board);

  const handleClick = (index) => {
    const boardCopy = [...state.board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = state.xIsNext ? "X" : "O";
    setState({
      ...state,
      board: boardCopy,
      xIsNext: !state.xIsNext,
    });
    // setBoard(boardCopy);
    // setXIsNext(!xIsNext);
  };
  const handleReset = () => {
    // setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Board cell={state.board} onClick={handleClick}></Board>
      <button onClick={handleReset}> Reset</button>
    </div>
  );
};

export default Game;
