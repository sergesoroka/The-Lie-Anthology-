import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface tagsList {
  tags: string[]
}
const initialState: tagsList = {
  tags: [],
};

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    addTag: (state, action: PayloadAction<string>) => {
      state.tags.push(action.payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const { addTag } = tagsSlice.actions

export default tagsSlice.reducer;
