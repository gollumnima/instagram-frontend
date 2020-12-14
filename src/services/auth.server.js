import axios from "axios";
import { API } from "utils/config";

const register = () => {
  return axios.post(`${API}/users`, {
    //인자로 넣을 것들 넣기
  });
};

const login = (username, password) => {
  return axios.post(`${API}/users/login`, { username, password }).then(res => {
    if (res.data.token) {
      localStorage.setItem("insta-login-token", res.data.token);
    }
    return res.data;
  });
};

const logout = () => {
  localStorage.removeItem("insta-login-token");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("insta-login-token"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser
};
