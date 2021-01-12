import { createSlice } from "@reduxjs/toolkit";
import { instaAPI } from "utils/axios.wrapper";

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    commentList: [],
    commentID: null
  },
  reducers: {
    setComment: (state, action) => {
      state.commentList = action.payload;
    },
    setCommentID: (state, action) => {
      state.commentID = action.payload;
    }
  }
});

export default commentSlice.reducer;

const { setComment, setCommentID } = commentSlice.actions;

export const getCommentID = commentID => async dispatch => {
  await dispatch(setCommentID(commentID));
};

export const getComments = postId => async dispatch => {
  const { data } = await instaAPI.get(`/api/comments/${postId}`);
  await dispatch(setComment(data.rows));
};

export const createComment = (postID, content) => async dispatch => {
  await instaAPI.post(`/api/comments/${postID}`, { content });
  await dispatch(getComments(postID));
};

export const changeComment = (postID, commentID, content) => async dispatch => {
  await instaAPI.put(`/api/comments/${commentID}`, { content });
  await dispatch(getComments(postID));
};

export const deleteComment = (postID, commentID) => async dispatch => {
  await instaAPI.delete(`/api/comments/${commentID}`);
  await dispatch(getComments(postID));
};
