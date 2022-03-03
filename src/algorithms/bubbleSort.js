export default function bubbleSort(array, arrayBars){
  let animatons = []
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      animatons.push([j, j+1])
        if (array[j] > array[j + 1]) {
         let temp = array[j] 
         array[j] = array[j + 1]
         array[j + 1] = temp
      }
   }
 }
 animateBubbleSort(animatons, arrayBars)
};

function animateBubbleSort(animations, arrayBars) {
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
