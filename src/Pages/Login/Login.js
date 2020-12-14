import React, { useReducer, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "utils/config";
import { setUserInfo } from "store/user";
import AuthService from "services/auth.server";
import { usernameCheck, passwordCheck } from "utils/validation";
// import Counter from "Components/Counter/Counter";
import "./login.scss";

const initialState = { username: "", password: "" };

// const reducer = (state, { name, value }) => {
//   return { ...state, [name]: value };
// };

const reducer = (state, action) => {
  if (action.type === "reset") return initialState;
  const result = { ...state };

  result[action.type] = action.value;
  return result;
};

const Login = (props, location) => {
  const [state, setDispatch] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  // const [userInfo, setUserInfo] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setDispatch({ type: name, value });
  };

  const handleSubmit = e => {
    // e.preventDefault();
    // POST Method
    // AuthService.login(username, password)
    axios
      .post(`${API}/users/login`, { username, password })
      .then(res => {
        if (res.status === 200) {
          console.log(res);
          dispatch(setUserInfo(res.data.user));
          // setUserInfo(userInfo.concat(res.data.user[0]));
          localStorage.setItem("insta-login-token", res.data.token);
          console.log("로그인 성공! 오예에~~");
          props.history.push("/");
        }
      })
      .catch(err => console.log(err));

    setDispatch({ type: "reset" });
  };

  const handleEnter = e => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const regExpId = /^[0-9a-z]+$/;
  const regExpPw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
  // : 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력

  const { username, password } = state;

  return (
    <div className="login-container">
      <div>
        <div className="login-box upper">
          <Link to="/">
            <img src="/instalogo.png" alt="insta-logo" />
          </Link>
          <div className="login-input-box">
            {/* <Counter /> */}
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
              onKeyPress={handleEnter}
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
