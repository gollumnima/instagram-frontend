import { createSlice } from "@reduxjs/toolkit";
import { instaAPI } from "utils/axios.wrapper";

const postSlice = createSlice({
  name: "post",
  initialState: {
    postNumber: null,
    post: null,
    postList: []
  },
  reducers: {
    setPostNumber: (state, action) => {
      state.postNumber = action.payload;
    },
    setPost: (state, action) => {
      state.post = action.payload;
    },
    setAllPost: (state, action) => {
      state.postList = action.payload;
    }
  }
});

export default postSlice.reducer;

const { setPostNumber, setPost, setAllPost } = postSlice.actions;

export const getPostNumber = postNum => dispatch => {
  dispatch(setPostNumber(postNum));
};

export const getPost = postId => async dispatch => {
  try {
    const { data } = await instaAPI.get(`/api/posts/${postId}`);

    // getPostNumber(data.id);
    // setImgURL(data.images[0].url); ???
    // setUserID(data.User.username); ???
    // setContent(data.content); ???

    dispatch(setPost(data));
  } catch (err) {
    console.error(err);
  }
};

export const getAllPost = postList => async dispatch => {
  await dispatch(setAllPost(postList));
};

export const likePost = postID => async dispatch => {
  await instaAPI.post(`/api/posts/${postID}/like`);
  await dispatch(getPost(postID));
};

export const unlikePost = postID => async dispatch => {
  await instaAPI.delete(`/api/posts/${postID}/like`);
  await dispatch(getPost(postID));
};
