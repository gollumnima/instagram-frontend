import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signUp } from "store/user";
import classNames from "classnames";
import css from "../Login/login.scss";
const cn = classNames.bind(css);

const initialState = { username: "", name: "", password: "" };

const reducer = (state, action) => {
  if (action.type === "reset") return initialState;
  const result = { ...state };

  result[action.type] = action.value;
  return result;
};

const SignUp = props => {
  const [state, setDispatch] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleChange = e => {
    const { name, value } = e.target;
    setDispatch({ type: name, value });
  };

  const handleSubmit = async e => {
    const { username, name, password } = state;

    await dispatch(signUp(username, name, password));
    props.history.push("/login");
    // props.history.push({ pathname: "/login", state: { username, password } });
  };

  const handleEnter = e => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const { username, name, password } = state;

  return (
    <div className="login-container">
      <div>
        <div className="login-box upper">
          <img src="/instalogo.png" alt="insta-logo" />
          <div className="login-input-box">
            <input
              className="input-id"
              name="username"
              value={username}
              placeholder="  사용자 이름"
              onChange={handleChange}
            />
            <input
              className="input-id"
              name="name"
              value={name}
              placeholder="  성명"
              onChange={handleChange}
            />
            <input
              className="input-pw"
              // className={cn(${password} && `moving`)}
              name="password"
              value={password}
              type="password"
              //            aria-label="  비밀번호"
              placeholder="  비밀번호"
              onChange={handleChange}
              onKeyPress={handleEnter}
            />
            <button
              className={`login-btn ${username && password && `active`} `}
              onClick={handleSubmit}
            >
              가입
            </button>
          </div>
          <div className="login__notice">
            <p className="login__notice__p">
              가입하면 Instagram의
              <span className="bold"> 약관, 데이터 정책 및 쿠키 정책</span>에
              동의하게 됩니다.
            </p>
          </div>
        </div>
        <div className="login-box down">
          <p>
            계정이 있으신가요?
            <Link to="/login">
              <span className="blue-highlight"> 로그인</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
