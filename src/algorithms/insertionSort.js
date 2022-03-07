import { sleep } from "../Helpers/helpers";

export default async function insertionSort(array, arrayBars) {
  let animations = [];
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      animations.push([j, j - 1]);
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  await animateInseritonSort(arrayBars, animations);
}

async function animateInseritonSort(arrayBars, animations) {
  for (let i = 0; i < animations.length; i++) {
    const [barOne, barTwo] = animations[i];
    await sleep(1).then(() => {
      if (
        parseInt(arrayBars[barOne].style.height) <
        parseInt(arrayBars[barTwo].style.height)
      ) {
        let temp = arrayBars[barOne].style.height;
        arrayBars[barOne].style.height = arrayBars[barTwo].style.height;
        arrayBars[barTwo].style.height = temp;
      }
    });
    arrayBars[barOne].className = "w-1 inline-block mt-0 mr-1 bg-green-800";
    arrayBars[barTwo].className = "w-1 inline-block mt-0 mr-1 bg-blue-800";
  }
}
