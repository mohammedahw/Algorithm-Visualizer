import { React, useState, useEffect, useRef } from "react";
import { Bar } from "./Bar";
import { bubbleSort } from "../algorithms/bubbleSort";
import { getMergeSortAnimations } from "../algorithms/mergeSort";
import { selectionSort } from "../algorithms/selectionSort";

const COMPARE_COLOR = "#DF0303";

export const SortingVisualizer = () => {
  const arr = [];
  for (let i = 0; i < 215; i++) {
    arr.push(generateRandomNumber(5, 550));
  }

  const [array, setArray] = useState([]);
  const [color, setColor] = useState("blue");
  const [algorithm, setAlgorithm] = useState("");

  useEffect(() => {
    setArray(arr);
  }, []);

  const barRef = useRef(null);

  const generateArray = () => {
    const newArr = [];
    for (let i = 0; i < 215; i++) {
      newArr.push(generateRandomNumber(5, 550));
    }
    setArray(newArr);
    setColor("blue");
    setAlgorithm("");
  };

  const handleAlgorithm = (event) => {
    setAlgorithm(event);
  };

  const handleStart = (e) => {
    if (algorithm === "") {
      return;
    }
    if (algorithm === "bubbleSort") {
      handleBubbleSort();
    }
    if (algorithm === "selectionSort") {
      handleSelectionSort();
    }
    if (algorithm === "mergeSort") {
      handleMergeSort();
    }
    if (algorithm === "quickSort") {
      handleQuickSort();
    }
  };

  const handleBubbleSort = () => {
    const animations = bubbleSort(array);
    const arrayBars = barRef.current.children;
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = COMPARE_COLOR;
      if (array[barOneIdx] > array[barTwoIdx]) {
        setTimeout(() => {
          barOneStyle.backgroundColor = `#FFFF00`;
          barTwoStyle.backgroundColor = `#FFFF00`;
          barOneStyle.height = `${array[barTwoIdx]}px`;
          barTwoStyle.height = `${array[barOneIdx]}px`;
        }, 1 * i);
      } else {
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      }
    }
  };

  const handleMergeSort = () => {
    const animations = getMergeSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = barRef.current.children;
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "green";
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

  const handleSelectionSort = () => {
    let x = selectionSort(array);
    setArray(x);
  };

  const handleQuickSort = () => {
    return;
  };

  return (
    <>
      <div className="absolute top-1/3 left-24" ref={barRef}>
        {array.map((val, index) => {
          return <Bar value={val} key={index} color={color} />;
        })}
        <button onClick={generateArray} className="px-8 border bg-blue-300">
          Generate New Array
        </button>
        <button
          className="px-8 border bg-gray-300"
          value="bubbleSort"
          onClick={(event) => handleAlgorithm(event.target.value)}
        >
          Bubble Sort
        </button>
        <button
          className="px-8 border bg-gray-300"
          value="selectionSort"
          onClick={(event) => handleAlgorithm(event.target.value)}
        >
          Selection Sort
        </button>
        <button
          className="px-8 border bg-gray-300"
          value="quickSort"
          onClick={(event) => handleAlgorithm(event.target.value)}
        >
          Quick Sort
        </button>
        <button
          className="px-8 border bg-gray-300"
          value="mergeSort"
          onClick={(event) => handleAlgorithm(event.target.value)}
        >
          Merge Sort
        </button>
        {algorithm === "" ? (
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
