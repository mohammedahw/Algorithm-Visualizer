import { React, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { bubbleSort } from "../algorithms/bubbleSort";

export const SortingVisualizer = () => {
  const arr = [];
  for (let i = 0; i < 215; i++) {
    arr.push(randomIntFromInterval(5, 550));
  }

  const [array, setArray] = useState([]);

  useEffect(() => {
    setArray(arr);
  }, []);

  const resetArray = () => {
    setArray(array);
    const newArr = [];
    for (let i = 0; i < 215; i++) {
      newArr.push(randomIntFromInterval(5, 550));
    }
    setArray(newArr);
  };

  return (
    <>
      <div className="absolute top-1/3 left-24">
        {array.map((value, idx) => {
          return (
            <div
              className=" w-1 bg-green-300 inline-block mt-0 mr-1"
              key={idx}
              style={{ height: `${value}px` }}
            ></div>
          );
        })}
        <button onClick={resetArray} className="px-8 border bg-blue-300">
          Generate New Array
        </button>
        <button className="px-8 border bg-gray-300">Bubble Sort</button>
        <button className="px-8 border bg-gray-300">Insertion Sort</button>
        <button className="px-8 border bg-gray-300">Quick Sort</button>
        <button className="px-8 border bg-gray-300">Merge Sort</button>
        <button className="px-8 border bg-green-300">Visualize!</button>
      </div>
    </>
  );
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
