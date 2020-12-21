import { createSlice } from "@reduxjs/toolkit";
import { instaAPI } from "utils/axios.wrapper";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    commentList: []
  },
  reducers: {
    setComment: (state, action) => {
      state.commentList.concat(action.payload);
    }
  }
});
export default commentSlice.reducer;

const { setComment } = commentSlice.actions;

export const postComment = (comment, postID) => dispatch => {
  instaAPI.post(`/api/comments/${postID}`).then(res => console.log(res));

  // dispatch(setComment(list));
};

export const getComment = list => dispatch => {
  dispatch();
};
