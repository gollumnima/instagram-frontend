export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("insta-login-token"));

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
}
