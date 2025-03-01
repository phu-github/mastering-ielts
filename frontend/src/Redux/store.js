import { configureStore } from "@reduxjs/toolkit";
import vocabularyReducer from "./slices/vocabularySlice";

export const store = configureStore({
  reducer: {
    vocabulary: vocabularyReducer,
  },
});
