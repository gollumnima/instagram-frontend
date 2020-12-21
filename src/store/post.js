import { createSlice } from "@reduxjs/toolkit";
import { instaAPI } from "utils/axios.wrapper";

const postSlice = createSlice({
  name: "post",
  initialState: {
    postNumber: null,
    commentList: []
  },
  reducers: {
    setPostNumber: (state, action) => {
      state.postNumber = action.payload;
    },
    setComment: (state, action) => {
      state.commentList.concat(action.payload);
    }
  }
});

export default postSlice.reducer;

const { setPostNumber } = postSlice.actions;

export const getPostNumber = postNum => dispatch => {
  dispatch(setPostNumber(postNum));
};
