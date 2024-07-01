import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./SearchSlice.js";

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export default store;
