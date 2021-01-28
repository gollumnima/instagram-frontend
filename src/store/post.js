import { createSlice } from "@reduxjs/toolkit";
import { instaAPI } from "utils/axios.wrapper";
import _ from "lodash";

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: null,
    postList: []
  },
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
    setPostList: (state, action) => {
      state.postList = action.payload;
    }
  }
});

export default postSlice.reducer;

const { setPost, setPostList } = postSlice.actions;

export const getPosts = () =>
  _.memoize(async dispatch => {
    try {
      const { data } = await instaAPI.get(`/api/posts`);
      dispatch(setPostList(data.rows));
    } catch (err) {
      console.error(err);
    }
  });

export const getPost = postId =>
  _.memoize(async dispatch => {
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
  });

export const deletePost = postId =>
  _.memoize(async dispatch => {
    await instaAPI.delete(`/api/posts/${postId}`);
    await dispatch(getPosts());
    //const { data } = instaAPI.delete(`/api/posts/${postId}`);
    //await dispatch(getPost(data));
  });

// export const getAllPost = postList => async dispatch => {
//   await dispatch(setAllPost(postList));
// };

export const likePost = postID =>
  _.memoize(async dispatch => {
    await instaAPI.post(`/api/posts/${postID}/like`);
    await dispatch(getPost(postID));
    await dispatch(getPosts());
  });

export const unlikePost = postID =>
  _.memoize(async dispatch => {
    await instaAPI.delete(`/api/posts/${postID}/like`);
    await dispatch(getPost(postID));
    await dispatch(getPosts());
  });
