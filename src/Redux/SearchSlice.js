import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  category: "",
};

const serchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { setSearchTerm, setCategory } = serchSlice.actions;
export default serchSlice.reducer;
