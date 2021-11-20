import { React, useState } from "react";
import { Bar } from "./Bar";
import { bubbleSort } from "../algorithms/bubbleSort";
import { getMergeSortAnimations } from "../algorithms/mergeSort";

const COMPARE_COLOR = "#DF0303";

export const SortingVisualizer = () => {
  const array = [];
  for (let i = 0; i < 215; i++) {
    array.push(generateRandomNumber(5, 550));
  }

  const [state, setState] = useState({
    array: array,
    color: "#2EFF00",
    algorithm: "",
  });

  const generateArray = () => {
    const newArr = [];
    for (let i = 0; i < 215; i++) {
      newArr.push(generateRandomNumber(5, 550));
    }
    setState({
      array: newArr,
      algorithm: "",
      color: "#2EEF00",
    });
  };

  const setAlgorithm = (event) => {
    setState({ ...state, algorithm: event });
  };

  const handleStart = (e) => {
    if (state.algorithm === "") {
      return;
    }
    if (state.algorithm === "bubbleSort") {
      handleBubbleSort();
    }
    // if (state.algorithm === "selectionSort") {
    //   sortedArray = selectionSort(array, state.color);
    //   setState({ array: sortedArray[0], color: sortedArray[1] });
    // }
    if (state.algorithm === "mergeSort") {
      handleMergeSort();
    }
  };

  const handleBubbleSort = () => {
    const animations = bubbleSort(state.array);
    const arrayBars = document.getElementsByClassName("bar");
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = COMPARE_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
        if (state.array[barOneIdx] > state.array[barTwoIdx]) {
          setTimeout(() => {
            barOneStyle.backgroundColor = `#FFFF00`;
            barTwoStyle.backgroundColor = `#FFFF00`;
            barOneStyle.height = `${state.array[barTwoIdx]}px`;
            barTwoStyle.height = `${state.array[barOneIdx]}px`;
          }, 1 * i);
        }
      }, i * 10);
    }
    setState({
      ...state,
      color: "blue",
    });
  };

  const handleMergeSort = () => {
    const animations = getMergeSortAnimations(state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "blue";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 1);
      }
    }
  };

  return (
    <>
      <div className="absolute top-1/3 left-24">
        {state.array.map((val, index) => {
          return <Bar clas="bar" value={val} key={index} color={state.color} />;
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
        {state.algorithm === "" ? (
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
