export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("insta-login-token"));
  console.log(user, "uuuuuuu");
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
}
