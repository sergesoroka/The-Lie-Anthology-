import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface categoriesList {
  categoriesArray: string[];
}
const initialState: categoriesList = {
  categoriesArray: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      const currentIndex = state.categoriesArray.indexOf(action.payload);
      if (currentIndex === -1) {
        state.categoriesArray.push(action.payload);
      } else {
        state.categoriesArray.splice(currentIndex, 1);
      }
    },
  },
});

export const { addCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
