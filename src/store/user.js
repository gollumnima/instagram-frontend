import { createSlice } from "@reduxjs/toolkit";
import { instaAPI } from "utils/axios.wrapper";
import { authToken } from "utils/localStorage.wrapper";

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

export const login = (username, password, callback) => async dispatch => {
  try {
    const { data } = await instaAPI.post(`/api/users/login`, {
      username,
      password
    });
    const { user, token } = data;
    dispatch(setUserInfo(user));
    authToken.set(token);
    if (callback) return callback(user);
  } catch (err) {
    dispatch(setUserInfo(null));
    authToken.remove();
  }
};

export const getSelf = () => dispatch => {
  instaAPI.get(`/api/users/self`).then(({ data }) => {
    dispatch(setUserInfo(data));
    console.log(data);
  });
};
