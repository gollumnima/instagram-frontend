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
    },
    removeComment: (state, action) => {
      const target = state.commentList.find(el => el.id === state.commentID);
      const idx = state.commentList.indexOf(target);
      state.commentList.splice(idx, 1);
    }
  }
});
export default commentSlice.reducer;

const { setComment, setCommentID, removeComment } = commentSlice.actions;

export const getCommentID = commentID => async dispatch => {
  await dispatch(setCommentID(commentID));
};

export const getComments = postId => async dispatch => {
  const { data } = await instaAPI.get(`/api/comments/${postId}`);
  await dispatch(setComment(data.rows));
};

export const createComment = (comment, postID) => async dispatch => {
  await instaAPI.post(`/api/comments/${postID}`, { content: comment });
  await dispatch(getComments(postID));
};

export const changeComment = (comment, commentID) => async dispatch => {
  await instaAPI.put(`/api/comments/${commentID}`, { content: comment });
  await dispatch(getComments(commentID));
};

export const deleteComment = commentID => async dispatch => {
  await instaAPI.delete(`/api/comments/${commentID}`);
  await dispatch(removeComment(commentID));
};
