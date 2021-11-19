export const bubbleSort = (state) => {
  for (let i = 0; i < state.array.length; i++) {
    for (let j = 0; j < state.array.length - i - 1; j++) {
      if (state.array[j] > state.array[j + 1]) {
        let temp = state.array[j];
        state.array[j] = state.array[j + 1];
        state.array[j + 1] = temp;
      }
    }
  }
  state.color = "blue";
  return state;
};
