export default function selectionSort(array) {
  let i, key, j; 
  for (i = 1; i < array.length; i++) { 
    key = array[i]; 
    j = i - 1; 
    while (j >= 0 && array[j] > key) { 
        array[j + 1] = array[j]; 
        j = j - 1; 
      } 
    array[j + 1] = key; 
  }
  return array
}