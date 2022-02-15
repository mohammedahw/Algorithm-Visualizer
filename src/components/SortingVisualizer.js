import { React, useState, useRef, useEffect } from "react";
import bubbleSort  from "../algorithms/bubbleSort";
import mergeSort  from "../algorithms/mergeSort";
import insertionSort from "../algorithms/insertionSort";
import getInitialArraySize from "../utils/getInitialArraySize";

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const arr = [];
for (let i = 0; i < getInitialArraySize(); i++) {
  arr.push(generateRandomNumber(5, 550));
}

export default function SortingVisualizer() {
  const [array, setArray] = useState(arr);
  const [currentAlgorithm, setCurrentAlgorithm] = useState("");
  const arrayBarsParentElementRef = useRef(null);

  const generateNewArray = () => {
    const SCREENWIDTH = getInitialArraySize()
    const newArr = [];
    for (let i = 0; i < SCREENWIDTH; i++) {
      newArr.push(generateRandomNumber(5, 550));
    }
    setArray(newArr);
    setCurrentAlgorithm("");
    for (let i = 0; i < arrayBarsParentElementRef.current.children.length; i++) {
      arrayBarsParentElementRef.current.children[i].className =
        "w-1 inline-block mt-0 mr-1 bg-blue-800";
    }
  };

  useEffect(()=> {
    window.addEventListener("resize", generateNewArray)
  },[])

  const handleAlgorithm = (event) => {
    setCurrentAlgorithm(event);
  };

  const handleStart = () => {
    switch (currentAlgorithm) {
      case "Bubble Sort":
        handleBubbleSort();
        break;
      case "Insertion Sort":
        handleInsertionSort();
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
    const arrayBars = arrayBarsParentElementRef.current.children;
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx] = animations[i];
      let barOne = arrayBars[barOneIdx];
      let barTwo = arrayBars[barTwoIdx];
      setTimeout(() => {
        if (parseInt(barOne.style.height) > parseInt(barTwo.style.height)) {
          let temp = barOne.style.height;
          barOne.style.height = barTwo.style.height;
          barTwo.style.height = temp;
        }
        barTwo.className = "w-1 inline-block mt-0 mr-1 bg-green-800";
        barOne.className = "w-1 inline-block mt-0 mr-1 bg-blue-800";
      }, i * 1)
    }
  }

  const handleMergeSort = () => {
    const animations = mergeSort(array);
    const arrayBars = arrayBarsParentElementRef.current.children;
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const color = i % 3 === 0 ? "bg-red-800" : "bg-green-800";
        let barOne = arrayBars[barOneIdx];
        let barTwo = arrayBars[barTwoIdx];
        setTimeout(() => {
          barOne.className = `w-1 inline-block mt-0 mr-1 ${color}`;
          barTwo.className = `w-1 inline-block mt-0 mr-1 ${color}`;
        }, i * 3);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 3);
      }
    }

  };

  const handleInsertionSort = () => {
    const animations = insertionSort(array)
    const arrayBars = arrayBarsParentElementRef.current.children
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx] = animations[i]
      if (parseInt(arrayBars[barTwoIdx].style.height) > parseInt(arrayBars[barOneIdx].style.height)) {
        let temp = arrayBars[barTwoIdx + 1].style.height
        arrayBars[barTwoIdx + 1].style.height = arrayBars[barOneIdx].style.height
        arrayBars[barOneIdx].style.height = temp
      }
    }
  };

  const handleQuickSort = () => {
    return;
  };   

  return (
    <>
      <nav className="bg-gray-700 py-1">
        <button
          onClick={generateNewArray}
          className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow hover:bg-red-800"
        >
          Generate New Array
        </button>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow hover:bg-blue-700"
          value="Bubble Sort"
          onClick={(event) => handleAlgorithm(event.target.value)}
        >
          Bubble Sort
        </button>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow hover:bg-blue-700"
          value="Insertion Sort"
          onClick={(event) => handleAlgorithm(event.target.value)}
        >
          Insertion Sort
        </button>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:shadow hover:bg-blue-700"
          value="Quick Sort"
          onClick={(event) => handleAlgorithm(event.target.value)}
        >
          Quick Sort
        </button>
        <button
          className="h-10 px-5 m-2 text-blue-100 transition-colors duration-150 bg-blue-600 rounded-lg focus:outline-none hover:bg-blue-700"
          value="Merge Sort"
          onClick={(event) => handleAlgorithm(event.target.value)}
        >
          Merge Sort
        </button>
        {currentAlgorithm === "" ? (
          <p></p>
        ) : (
          <button
            className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-600 rounded-lg focus:shadow hover:bg-green-700"
            onClick={handleStart}
          >
            Visualize {currentAlgorithm}!
          </button>
        )}
      </nav>
      <div className="flex justify-center items-center h-screen">
        <div ref={arrayBarsParentElementRef}>
          {array.map((val, index) => {
            return (
              <div
                key={index}
                style={{ height: `${val}px` }}
                className="w-1 inline-block mt-0 mr-1 bg-blue-800"
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};


