import React, { useReducer } from "react";
import { usernameCheck, passwordCheck } from "utils/validation";
import Counter from "Components/Counter/Counter";
import "./login.scss";

const initialState = { username: "", password: "", merong: "" };

// const reducer = (state, { name, value }) => {
//   return { ...state, [name]: value };
// };

const reducer = (state, action) => {
  if (action.type === "reset") return initialState;
  const result = { ...state };
  console.log({ result });
  console.log(action, "ac");
  result[action.type] = action.value;
  return result;
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch({ type: name, value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // POST Method

    dispatch({ type: "reset" });
  };

  const regExpId = /^[0-9a-z]+$/;
  const regExpPw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
  // : 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력

  const { username, password, merong } = state;

  console.log(username, password, merong);
  return (
    <div className="login-container">
      <div>
        <div className="login-box upper">
          <img src="/instalogo.png" alt="insta-logo" />
          <div className="login-input-box">
            <Counter />
            <input
              className="input-id"
              name="username"
              value={username}
              placeholder="  전화번호, 사용자 이름 또는 이메일"
              onChange={handleChange}
            />
            <input
              className="input-pw"
              name="password"
              value={password}
              type="password"
              placeholder="  비밀번호"
              onChange={handleChange}
            />
            <button
              className={`login-btn ${username && password && `active`} `}
              onClick={handleSubmit}
            >
              로그인
            </button>
          </div>
        </div>
        <div className="login-box down">
          <p>
            계정이 없으신가요?
            <span> 가입하기</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
