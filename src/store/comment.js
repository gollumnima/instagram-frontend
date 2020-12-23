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
    // removeComment: (state, action) => {
    //   const target = state.commentList.find(el => el.id === state.commentID);
    //   const idx = state.commentList.indexOf(target);
    //   state.commentList.splice(idx, 1);
    // }
    // 댓글 생성 api 호출하고나서 --> get 해서 덮어쓰지
    // 댓글 수정 하고나서 --> get
    // 댓글 삭제 하고나서 -->
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
