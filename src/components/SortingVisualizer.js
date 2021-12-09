import { React, useState, useRef } from "react";
import { Bar } from "./Bar";
import { bubbleSort } from "../algorithms/bubbleSort";
import { mergeSort } from "../algorithms/mergeSort";
import { selectionSort } from "../algorithms/selectionSort";

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const arr = [];
for (let i = 0; i < 215; i++) {
  arr.push(generateRandomNumber(5, 550));
}

export const SortingVisualizer = () => {
  const [array, setArray] = useState(arr);
  const [color, setColor] = useState("blue");
  const [algorithm, setAlgorithm] = useState("");
  const barsParent = useRef(null);

  const generateArray = () => {
    const newArr = [];
    for (let i = 0; i < 215; i++) {
      newArr.push(generateRandomNumber(5, 550));
    }
    setArray(newArr);
    setColor("blue");
    setAlgorithm("");
    for (let i = 0; i < barsParent.current.children.length; i++) {
      if (barsParent.current.children[i].style.backgroundColor === "blue")
        break;
      barsParent.current.children[i].style.backgroundColor = "blue";
    }
  };

  const handleAlgorithm = (event) => {
    setAlgorithm(event);
  };

  const handleStart = () => {
    switch (algorithm) {
      case "Bubble Sort":
        handleBubbleSort();
        break;
      case "Selection Sort":
        handleSelectionSort();
        break;
      case "Merge Sort":
        handleMergeSort();
        break;
      case "Quick Sort":
        handleQuickSort();
        break;
      default:
        return;
    }
  };

  const handleBubbleSort = () => {
    const animations = bubbleSort(array);
    const arrayBars = barsParent.current.children;
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      setTimeout(() => {
        if (
          parseInt(arrayBars[barOneIdx].style.height) >
          parseInt(arrayBars[barTwoIdx].style.height)
        ) {
          let temp = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = temp;
          barTwoStyle.backgroundColor = "green";
        }
      }, i * 3);
    }
  };

  const handleMergeSort = () => {
    const animations = mergeSort(array);
    const arrayBars = barsParent.current.children;
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "green";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 5);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 5);
      }
    }
  };

  const handleSelectionSort = () => {
    const animations = selectionSort(array);
    const arrayBars = barsParent.current.children;
    for (let i = 0; i < animations.length; i++) {
      let [barOneIdx, barTwoIdx] = animations[i];
      setTimeout(() => {
        let temp = arrayBars[barOneIdx].style.height;
        arrayBars[barOneIdx].style.height = arrayBars[barTwoIdx].style.height;
        arrayBars[barTwoIdx].style.height = temp;
      }, i * 100);
    }
  };
  const handleQuickSort = () => {
    return;
  };

  return (
    <>
      <nav className="bg-gray-700 py-1">
        <button
          onClick={generateArray}
          className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"
        >
          Generate New Array
        </button>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
          value="Bubble Sort"
          onClick={(event) => handleAlgorithm(event.target.value)}
        >
          Bubble Sort
        </button>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
          value="Selection Sort"
          onClick={(event) => handleAlgorithm(event.target.value)}
        >
          Selection Sort
        </button>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
          value="Quick Sort"
          onClick={(event) => handleAlgorithm(event.target.value)}
        >
          Quick Sort
        </button>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow-outline hover:bg-blue-700"
          value="Merge Sort"
          onClick={(event) => handleAlgorithm(event.target.value)}
        >
          Merge Sort
        </button>
        {algorithm === "" ? (
          <p></p>
        ) : (
          <button
            className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-600 rounded-lg focus:shadow-outline hover:bg-green-700"
            onClick={handleStart}
          >
            Visualize {algorithm}!
          </button>
        )}
      </nav>
      <div className="absolute top-1/3 left-24">
        <div ref={barsParent}>
          {array.map((val, index) => {
            return <Bar value={val} key={index} color={color} />;
          })}
        </div>
      </div>
    </>
  );
};
