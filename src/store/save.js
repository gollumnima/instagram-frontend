import { createSlice } from "@reduxjs/toolkit";

const saveSlice = createSlice({
  name: "save",
  initialState: {
    savedList: []
  },
  reducers: {
    setSavedList: (state, action) => {
      state.savedList = state.savedList.concat(action.payload);
    }
  }
});

export default saveSlice.reducer;

const { setSavedList } = saveSlice.actions;

export const getSaves = post => async dispatch => {
  await dispatch(setSavedList(post));
};
