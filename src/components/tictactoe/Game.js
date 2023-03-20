import React, { useReducer, useState } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyles.css";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }

    default:
      console.log("error");
      break;
  }
  return state;
};

const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  //   const [board, setBoard] = useState(Array(9).fill(null));
  //     const [xIsNext, setXIsNext] = useState(true);

  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  // });
  const winner = calculateWinner(state.board);

  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return;
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext,
    // });
    // setBoard(boardCopy);
    // setXIsNext(!xIsNext);
  };
  const handleReset = () => {
    // setBoard(Array(9).fill(null));
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      <Board cell={state.board} onClick={handleClick}></Board>
      <button onClick={handleReset}> Reset</button>
    </div>
  );
};

export default Game;
