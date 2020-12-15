import { createSlice } from "@reduxjs/toolkit";
import { instaAPI } from "utils/axios.wrapper";
// Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state, action) => {
      state.userInfo = [];
    }
  }
});

export default userSlice.reducer;

// Action

const { setUserInfo } = userSlice.actions;

export const login = data => (dispatch, getState) => {
  dispatch(setUserInfo(data));
};

export const getSelf = () => dispatch => {
  instaAPI.get(`/api/users/self`).then(({ data }) => {
    dispatch(setUserInfo(data));
  });
};
