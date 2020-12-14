import axios from "axios";
import authHeader from "./auth.header";

const API = "http://15.165.17.58/api";

const getPublicContent = () => {
  return axios.get(`${API}/posts`);
};

// 이런식으로 다 만들기
