import React, { useState, useRef } from "react";
import Node from "./Node";

const START_NODE_ROW = 9;
const START_NODE_COL = 5;
const FINISH_NODE_ROW = 9;
const FINISH_NODE_COL = 41;

export default function PathfindingVisalizer() {
  const [grid, setGrid] = useState(generateInitialGrid());
  const [currentAlgorithm, setCurrentAlgorithm] = useState("");
  const [isMousePressed, setIsMousePressed] = useState(false);
  const navRef = useRef(null);

  const restGrid = () => {
    const newGrid = generateInitialGrid();
    setGrid(newGrid);
    setCurrentAlgorithm("");
  };

  const handleMouseDown = (row, col) => {
    const newGrid = toggleWall(grid, row, col);
    setIsMousePressed(true);
    setGrid(newGrid);
  };

  const handleMouseEnter = (row, col) => {
    if (!isMousePressed) return;
    const newGrid = toggleWall(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = () => {
    setIsMousePressed(false);
  };

  const handleStart = () => {
    return;
  };

  return (
    <>
      <nav className="bg-gray-700 py-1" ref={navRef}>
        <button
          className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow hover:bg-red-800"
          onClick={() => restGrid()}
        >
          Reset
        </button>
        <button className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-yellow-600 rounded-lg focus:shadow hover:bg-yellow-700">
          Create Maze
        </button>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow hover:bg-blue-700"
          value={"A*"}
          onClick={(e) => setCurrentAlgorithm(e.target.value)}
        >
          A*
        </button>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow hover:bg-blue-700"
          value={"DFS"}
          onClick={(e) => setCurrentAlgorithm(e.target.value)}
        >
          DFS
        </button>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow hover:bg-blue-700"
          value={"BFS"}
          onClick={(e) => setCurrentAlgorithm(e.target.value)}
        >
          BFS
        </button>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow hover:bg-blue-700"
          value={"Dijkstra's"}
          onClick={(e) => setCurrentAlgorithm(e.target.value)}
        >
          Dijkstra's
        </button>
        {currentAlgorithm && (
          <button
            className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-600 rounded-lg focus:shadow hover:bg-green-700"
            onClick={() => handleStart()}
          >
            Visualize {currentAlgorithm}
          </button>
        )}
      </nav>
      <div className="py-7">
        {grid.map((row, rowIdx) => {
          return (
            <div key={rowIdx} className="flex justify-center items-center">
              {row.map((col, colIdx) => {
                return (
                  <Node
                    row={rowIdx}
                    col={colIdx}
                    key={colIdx}
                    isStart={col.isStart}
                    isFinish={col.isFinish}
                    isWall={col.isWall}
                    onMouseDown={handleMouseDown}
                    onMouseEnter={handleMouseEnter}
                    onMouseUp={handleMouseUp}
                  />
                );
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
  for (let row = 0; row < 19; row++) {
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

const toggleWall = (grid, row, col) => {
  const newGrid = [...grid];
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
