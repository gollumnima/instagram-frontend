import { createSlice } from "@reduxjs/toolkit";
import { instaAPI } from "utils/axios.wrapper";
import { authToken } from "utils/localStorage.wrapper";
import _ from "lodash";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    foundUser: null,
    followers: {
      rows: [],
      count: 0
    },
    followings: {
      rows: [],
      count: 0
    }
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setFoundUser: (state, action) => {
      state.foundUser = action.payload;
    },
    setFollowers: (state, { payload = {} }) => {
      const { rows, count } = payload;
      state.followers = { rows, count };
    },
    setFollowings: (state, { payload = {} }) => {
      const { rows, count } = payload;
      state.followings = { rows, count };
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

export const signUp = (username, name, password) =>
  _.memoize(async dispatch => {
    try {
      const { data } = await instaAPI.post(`/api/users`, {
        username,
        name,
        password
      });
    } catch (err) {
      console.error(err);
    }
  });

export const login = (username, password, callback) =>
  _.memoize(async dispatch => {
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
  });

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

export const findUser = username =>
  _.memoize(async dispatch => {
    const { data } = await instaAPI.get(`/api/users/username/${username}`);
    dispatch(setFoundUser(data));
  });

// 해당 id를 가진 유저 follow
export const follow = id =>
  _.memoize(async dispatch => {
    try {
      await dispatch(
        setFollowers({
          rows: [],
          count: 0
        })
      );
      const { data } = await instaAPI.post(`/api/users/${id}/followers`);
      const { rows, count } = data;
      await dispatch(setFollowers({ rows, count }));
      return data;
    } catch (err) {
      console.error(err);
    }
  });

// 해당 id를 가진 유저 unfollow
export const unfollow = id =>
  _.memoize(async dispatch => {
    instaAPI.delete(`/api/users/${id}/followers`);
    dispatch(setFollowers(null));
  });

// 해당 id를 가진 유저의 follower 목록
export const getFollowers = id =>
  _.memoize(async dispatch => {
    try {
      await dispatch(
        setFollowers({
          rows: [],
          count: 0
        })
      );
      const { data } = await instaAPI.get(`/api/users/${id}/followers`);
      const { rows, count } = data;
      await dispatch(setFollowers({ rows, count }));
      return data;
    } catch (err) {
      console.error(err);
    }
  });

// 해당 id를 가진 유저의 following 목록
export const getFollowings = id =>
  _.memoize(async dispatch => {
    try {
      await dispatch(
        setFollowers({
          rows: [],
          count: 0
        })
      );
      const { data } = await instaAPI.get(`/api/users/${id}/followings`);
      const { rows, count } = data;
      await dispatch(setFollowings({ rows, count }));
      return data;
    } catch (err) {
      console.error(err);
    }
  });
