import { createSlice } from "@reduxjs/toolkit";
import { instaAPI } from "utils/axios.wrapper";

const likeSlice = createSlice({
  name: "like",
  initialState: {
    likeList: []
  },
  reducers: {
    setLike: (state, action) => {
      state.likeList = action.payload;
    }
  }
});
export default likeSlice.reducer;

const { setLike } = likeSlice.actions;

export const createLike = (user_id, post_id) => async dispatch => {
  const { data } = await instaAPI.post(`/api/posts/${post_id}/like`, {
    user_id,
    post_id
  });
  await dispatch(setLike(data.rows));
};

export const deleteLike = (comment, postID) => async dispatch => {
  const { data } = await instaAPI.post(`/api/comments/${postID}`);
  // splice??
};
