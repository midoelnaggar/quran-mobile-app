import { createSlice } from "@reduxjs/toolkit";

const separatorsSlice = createSlice({
  name: "separators",
  initialState: [],
  reducers: {
    addSeparator: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeSeparator: (state, action) => {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
      return state;
    },
  },
});

export default separatorsSlice;
