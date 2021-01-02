import { createSlice } from "@reduxjs/toolkit";
import { instaAPI } from "utils/axios.wrapper";

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

export const getPosts = () => async dispatch => {
  try {
    const { data } = await instaAPI.get(`/api/posts`);
    dispatch(setPostList(data.rows));
  } catch (err) {
    console.error(err);
  }
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

export const deletePost = postId => async dispatch => {
  await instaAPI.delete(`/api/posts/${postId}`);
  await dispatch(getPosts());
  //const { data } = instaAPI.delete(`/api/posts/${postId}`);
  //await dispatch(getPost(data));
};

// export const getAllPost = postList => async dispatch => {
//   await dispatch(setAllPost(postList));
// };

export const likePost = postID => async dispatch => {
  await instaAPI.post(`/api/posts/${postID}/like`);
  await dispatch(getPost(postID));
  await dispatch(getPosts());
};

export const unlikePost = postID => async dispatch => {
  await instaAPI.delete(`/api/posts/${postID}/like`);
  await dispatch(getPost(postID));
  await dispatch(getPosts());
};
