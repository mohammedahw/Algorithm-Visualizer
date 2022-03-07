import React, { useState, useEffect } from "react";
import Node from "./Node";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

export default function PathfindingVisalizer() {
  const [grid, setGrid] = useState([]);
  // const [currentAlgorithm, setCurrentAlgorithm] = useState("");

  useEffect(() => {
    const grid = generateGrid();
    setGrid(grid);
    console.log(grid);
  }, []);

  return (
    <>
      <nav className="bg-gray-700 py-8"></nav>
      <div className="flex justify-center items-center h-1/3">
        {grid.map((row, index) => {
          return (
            <div key={index}>
              {row.map((col, index) => {
                return <Node key={index} />;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

const generateGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 20; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};
