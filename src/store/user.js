import { createSlice } from "@reduxjs/toolkit";
import { instaAPI } from "utils/axios.wrapper";
import { authToken } from "utils/localStorage.wrapper";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    foundUser: null,
    followers: null,
    followings: null
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setFoundUser: (state, action) => {
      state.foundUser = action.payload;
    },
    setFollowers: (state, action) => {
      state.followers = action.payload;
    },
    setFollowings: (state, action) => {
      state.followings = action.payload;
    }
  }
});

export default userSlice.reducer;

// Action
const {
  setUserInfo,
  setFoundUser,
  setFollowers,
  setFollowings
} = userSlice.actions;

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
    console.log("로그인한 사용자의 username 👉", data.username);
  });
};

export const logout = () => dispatch => {
  authToken.remove();
  dispatch(setUserInfo(null));
};

export const deleteProfile = () => () => {
  instaAPI.delete(`/api/users/self/persona`);
};

export const findUser = username => async dispatch => {
  const { data } = await instaAPI.get(`/api/users/username/${username}`);
  dispatch(setFoundUser(data));
};

// 해당 id를 가진 유저 follow
export const follow = id => async dispatch => {
  const { data } = await instaAPI.post(`/api/users/${id}/followers`);
  dispatch(setFollowers(data));
};

// 해당 id를 가진 유저 unfollow
export const unfollow = id => async dispatch => {
  instaAPI.delete(`/api/users/${id}/followers`);
  dispatch(setFollowers(null));
};

// 해당 id를 가진 유저의 follower 목록
export const getFollowers = id => async dispatch => {
  const { data } = await instaAPI.get(`/api/users/${id}/followers`);
  dispatch(setFollowers(data.rows));
};

// 해당 id를 가진 유저의 following 목록
export const getFollowings = id => async dispatch => {
  const { data } = await instaAPI.get(`/api/users/${id}/followings`);
  dispatch(setFollowings(data.rows));
};
