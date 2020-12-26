import { createSlice } from "@reduxjs/toolkit";
import { instaAPI } from "utils/axios.wrapper";

const postSlice = createSlice({
  name: "post",
  initialState: {
    postNumber: null,
    currentPost: [],
    postList: []
  },
  reducers: {
    setPostNumber: (state, action) => {
      state.postNumber = action.payload;
    },
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },
    setAllPost: (state, action) => {
      state.postList = action.payload;
    }
  }
});

export default postSlice.reducer;

const { setPostNumber, setCurrentPost, setAllPost } = postSlice.actions;

export const getPostNumber = postNum => dispatch => {
  dispatch(setPostNumber(postNum));
};

export const getCurrentPost = current => dispatch => {
  dispatch(setCurrentPost(current));
};

export const getAllPost = postList => async dispatch => {
  await dispatch(setAllPost(postList));
};
