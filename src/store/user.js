import { createSlice } from "@reduxjs/toolkit";

// Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: []
  },
  reducers: {
    login: (state, action) => {
      return state.userInfo.concat(action.payload);
    },
    logout: (state, action) => {
      state.userInfo = [];
    }
  }
});

export default userSlice.reducer;

// Action

const { login } = userSlice.actions;

export const setUserInfo = data => (dispatch, getState) => {
  const state = getState();
  dispatch(login(data));
  if (!state.user.userInfo) {
    dispatch(login(data));
  }
};
