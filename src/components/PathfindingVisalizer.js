import React, { useState, useRef } from "react";
import Node from "./Node";

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

export default function PathfindingVisalizer() {
  const [grid, setGrid] = useState(generateInitialGrid());
  const [currentAlgorithm, setCurrentAlgorithm] = useState("");
  const navRef = useRef(null);

  const restGrid = () => {
    const newGrid = generateInitialGrid();
    setGrid(newGrid);
    setCurrentAlgorithm("");
  };

  const handleStart = () => {
    return;
  };

  return (
    <>
      <nav className="bg-gray-700 py-1" ref={navRef}>
        <button
          className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow hover:bg-red-800 text-xl"
          onClick={() => restGrid()}
        >
          Reset
        </button>
        <button className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-yellow-600 rounded-lg focus:shadow hover:bg-yellow-700 text-xl">
          Create Maze
        </button>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow hover:bg-blue-700 text-xl"
          value={"A*"}
          onClick={(e) => setCurrentAlgorithm(e.target.value)}
        >
          A*
        </button>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow hover:bg-blue-700 text-xl"
          value={"DFS"}
          onClick={(e) => setCurrentAlgorithm(e.target.value)}
        >
          DFS
        </button>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow hover:bg-blue-700 text-xl"
          value={"BFS"}
          onClick={(e) => setCurrentAlgorithm(e.target.value)}
        >
          BFS
        </button>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow hover:bg-blue-700 text-xl"
          value={"Dijiksra`s"}
          onClick={(e) => setCurrentAlgorithm(e.target.value)}
        >
          Dijiksra`s
        </button>
        {currentAlgorithm && (
          <button
            className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-600 rounded-lg focus:shadow hover:bg-green-700 text-xl"
            onClick={() => handleStart()}
          >
            Visualize {currentAlgorithm}
          </button>
        )}
      </nav>
      <div className="py-7">
        {grid.map((row, index) => {
          return (
            <div key={index} className="flex justify-center items-center">
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

const generateInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 18; row++) {
    const currentRow = [];
    for (let col = 0; col < 47; col++) {
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
