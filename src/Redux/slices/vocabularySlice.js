import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vocab: {
    x: "",
    y: "",
    value: 0,
    details: {},
  },
};

export const vocabularySlice = createSlice({
  name: "vocabulary",
  initialState,
  reducers: {
    updateCellOfHeadMap: (state, action) => {
      state.vocab = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { updateCellOfHeadMap } = vocabularySlice.actions;
export default vocabularySlice.reducer;
