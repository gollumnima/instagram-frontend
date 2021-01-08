import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "store/user";
import "./login.scss";

const Login = props => {
  const initialState = { username: "", password: "" };

  const reducer = (state, action) => {
    if (action.type === "reset") return initialState;
    const result = { ...state };

    result[action.type] = action.value;
    return result;
  };
  const [state, setDispatch] = useReducer(reducer, initialState);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    setDispatch({ type: name, value });
  };

  const handleSubmit = async () => {
    await dispatch(
      login(username, password, user => {
        props.history.push("/");

        setDispatch({ type: "reset" });
      })
    );
  };

  const handleEnter = e => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const { username, password } = state;

  return (
    <div className="login-container">
      <div>
        <div className="login-box upper">
          <Link to="/">
            <img src="/instalogo.png" alt="insta-logo" />
          </Link>
          <div className="login-input-box">
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
            <Link to="/signUp">
              <span> 가입하기</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
