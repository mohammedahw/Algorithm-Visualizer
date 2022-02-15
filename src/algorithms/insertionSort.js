export default function insertionSort(array) {
  let animations = []
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j;
    for (j = i - 1; j >= 0 && array[j] > current; j--) {
      animations.push([i, j])
      array[j + 1] = array[j];
    }
    array[j + 1] = current;
  }
  return animations;
}