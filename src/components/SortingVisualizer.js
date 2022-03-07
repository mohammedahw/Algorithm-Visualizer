import { React, useState, useRef, useEffect } from "react";
import bubbleSort from "../algorithms/bubbleSort";
import mergeSort from "../algorithms/mergeSort";
import insertionSort from "../algorithms/insertionSort";
import { getScreenWidth } from "../Helpers/helpers";
import quickSort from "../algorithms/quickSort";

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const arr = [];
for (let i = 0; i < getScreenWidth(); i++) {
  arr.push(generateRandomNumber(5, 550));
}

export default function SortingVisualizer() {
  const [array, setArray] = useState(arr);
  const [currentAlgorithm, setCurrentAlgorithm] = useState("");
  const arrayBarsParentElementRef = useRef(null);
  const buttonsRef = useRef(null);

  const generateNewArray = () => {
    const SCREENWIDTH = getScreenWidth();
    const newArr = [];
    for (let i = 0; i < SCREENWIDTH; i++) {
      newArr.push(generateRandomNumber(5, 550));
    }
    setArray(newArr);
    setCurrentAlgorithm("");
    for (
      let i = 0;
      i < arrayBarsParentElementRef.current.children.length;
      i++
    ) {
      arrayBarsParentElementRef.current.children[i].className =
        "w-1 inline-block mt-0 mr-1 bg-blue-800";
    }
  };

  useEffect(() => {
    window.addEventListener("resize", generateNewArray);
    return () => window.removeEventListener("resize", generateNewArray);
  }, []);

  const handleAlgorithm = (event) => {
    setCurrentAlgorithm(event);
  };

  const handleStart = async () => {
    for (let i = 0; i < buttonsRef.current.children.length; i++) {
      buttonsRef.current.children[i].disabled = true;
    }
    const arrayBars = arrayBarsParentElementRef.current.children;
    switch (currentAlgorithm) {
      case "Bubble Sort":
        await bubbleSort(array, arrayBars);
        break;
      case "Insertion Sort":
        await insertionSort(array, arrayBars);
        break;
      case "Merge Sort":
        await mergeSort(array, arrayBars);
        break;
      case "Quick Sort":
        await quickSort(array, arrayBars);
        break;
      default:
        return;
    }
    for (let i = 0; i < buttonsRef.current.children.length; i++) {
      buttonsRef.current.children[i].disabled = false;
    }

    for (
      let i = 0;
      i < arrayBarsParentElementRef.current.children.length;
      i++
    ) {
      arrayBarsParentElementRef.current.children[i].className =
        "w-1 inline-block mt-0 mr-1 bg-purple-800";
    }
  };

  return (
    <>
      <nav className="bg-gray-700 py-1" ref={buttonsRef}>
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
}
