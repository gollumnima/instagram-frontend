import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "utils/config";

// Slice
const slice = createSlice({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
    }
  }
});

export default slice.reducer;

// Action

const { loginSuccess, logoutSuccess } = slice.actions;
export const login = ({ username, password }) => async dispatch => {
  try {
    // const res = await axios.post(`${API}/users/login`, { username, password})
    dispatch(loginSuccess({ username }));
  } catch (err) {
    return console.error(err.message);
  }
};

export const logout = () => async dispatch => {
  try {
    // const res = await axios.post(`${API}/users/login`, { username, password})

    return dispatch(logoutSuccess);
  } catch (err) {
    return console.error(err.message);
  }
};
