import axios from "axios";

const instaAPI = axios.create({
  baseURL: "http://15.165.17.58/"
});

instaAPI.interceptors.request.use(req => {
  const authToken = localStorage.getItem("insta-login-token");
  const authHeader = authToken ? `Bearer ${authToken}` : "";
  return {
    ...req,
    headers: {
      ...req.headers,
      Authorization: authHeader
    }
  };
});

export { instaAPI };
