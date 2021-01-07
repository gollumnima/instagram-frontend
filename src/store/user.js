import { createSlice } from "@reduxjs/toolkit";
import { instaAPI } from "utils/axios.wrapper";
import { authToken } from "utils/localStorage.wrapper";

// Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    foundUser: null
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setFoundUser: (state, action) => {
      state.foundUser = action.payload;
    }
  }
});

export default userSlice.reducer;

// Action
const { setUserInfo, setFoundUser } = userSlice.actions;

export const signUp = (username, name, password) => async dispatch => {
  try {
    const { data } = await instaAPI.post(`/api/users`, {
      username,
      name,
      password
    });
  } catch (err) {
    console.error(err);
  }
};

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
    console.log(data.name, "로그인된 유저");
  });
};

export const logout = () => dispatch => {
  authToken.remove();
  dispatch(setUserInfo(null));
};

export const deleteProfile = () => () => {
  instaAPI.delete(`/api/users/self/persona`);
};

export const findUser = userID => async dispatch => {
  const { data } = await instaAPI.get(`/api/users/${userID}`);
  dispatch(setFoundUser(data));
};
