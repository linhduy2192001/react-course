import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  return (
    <div className="game-board">
      {props.cell.map((item, index) => (
        <Cell
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
