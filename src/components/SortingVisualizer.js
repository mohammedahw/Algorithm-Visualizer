import { React, useState } from "react";
import { bubbleSort } from "../algorithms/bubbleSort";
import { selectionSort } from "../algorithms/selectionSort";
import { Bar } from "./Bar";

export const SortingVisualizer = () => {
  const array = [];
  for (let i = 0; i < 215; i++) {
    array.push(generateRandomNumber(5, 550));
  }

  const [state, setState] = useState({
    array: array,
    color: "green",
    algorithm: "",
    visible: false,
  });

  const generateArray = () => {
    const newArr = [];
    for (let i = 0; i < 215; i++) {
      newArr.push(generateRandomNumber(5, 550));
    }
    setState({
      array: newArr,
      color: "green",
      algorithm: "",
      visible: false,
    });
  };

  const setAlgorithm = (event) => {
    setState({ ...state, algorithm: event, visible: !state.visible });
  };

  const handleStart = (e) => {
    if (state.algorithm === "") {
      return;
    }
    let sortedArray = [];
    if (state.algorithm === "bubbleSort") {
      sortedArray = bubbleSort(state);
      setState({ array: sortedArray.array, color: sortedArray.color });
    }
    if (state.algorithm === "selectionSort") {
      sortedArray = selectionSort(state);
      setState({ array: sortedArray.array, color: sortedArray.color });
    }
  };

  return (
    <>
      <div className="absolute top-1/3 left-24">
        {state.array.map((val, idx) => {
          return <Bar color={state.color} value={val} key={idx} />;
        })}
        <button onClick={generateArray} className="px-8 border bg-blue-300">
          Generate New Array
        </button>
        <button
          className="px-8 border bg-gray-300"
          value="bubbleSort"
          onClick={(event) => setAlgorithm(event.target.value)}
        >
          Bubble Sort
        </button>
        <button
          className="px-8 border bg-gray-300"
          value="selectionSort"
          onClick={(event) => setAlgorithm(event.target.value)}
        >
          Selection Sort
        </button>
        <button
          className="px-8 border bg-gray-300"
          value="quickSort"
          onClick={(event) => setAlgorithm(event.target.value)}
        >
          Quick Sort
        </button>
        <button
          className="px-8 border bg-gray-300"
          value="mergeSort"
          onClick={(event) => setAlgorithm(event.target.value)}
        >
          Merge Sort
        </button>
        {state.visible === false ? (
          <p></p>
        ) : (
          <button className="px-8 border bg-green-300" onClick={handleStart}>
            Visualize!
          </button>
        )}
      </div>
    </>
  );
};

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
