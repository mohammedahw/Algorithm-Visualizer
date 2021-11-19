export const selectionSort = (state) => {
  for (let i = 0; i < state.array.length; i++) {
    let min = i;
    for (let j = i + 1; j < state.array.length; j++) {
      if (state.array[j] < state.array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = state.array[i];
      state.array[i] = state.array[min];
      state.array[min] = temp;
    }
  }
  state.color = "blue";
  return state;
};
