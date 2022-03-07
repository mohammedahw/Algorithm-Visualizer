import React from "react";

export default function Node({
  row,
  col,
  isStart,
  isFinish,
  isWall,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
}) {
  const extraClassName = isFinish
    ? "bg-red-600"
    : isStart
    ? "bg-green-600"
    : isWall
    ? "bg-gray-800"
    : "";

  return (
    <div
      className={`w-10 h-10 border border-black ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    ></div>
  );
}
