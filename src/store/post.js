import { createSlice } from "@reduxjs/toolkit";
import { instaAPI } from "utils/axios.wrapper";

const postSlice = createSlice({
  name: "post",
  initialState: {
    postNumber: null,
    currentPost: []
  },
  reducers: {
    setPostNumber: (state, action) => {
      state.postNumber = action.payload;
    },
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    }
  }
});

export default postSlice.reducer;

const { setPostNumber, setCurrentPost } = postSlice.actions;

export const getPostNumber = postNum => dispatch => {
  dispatch(setPostNumber(postNum));
};

export const getCurrentPost = current => dispatch => {
  dispatch(setCurrentPost(current));
};
