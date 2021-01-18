import React from "react";
import { useHistory } from "react-router-dom";
import Profile from "Components/Profile";
import { useSelector } from "react-redux";
import "./layout__header.scss";

const LayoutHeader = ({ url, username, link }) => {
  const history = useHistory();
  //const user = useSelector(state => state.user);
  const moveToUserPage = () => {
    link && history.push(`/${username}`);
    // 이렇게 할 경우 해당 유저의 마이페이지로 이동은 가능하나
    // 다시 로그인한 유저의 마이페이지로 갈 경우 둘의 정보가 섞인다!
  };

  return (
    <header className="layout__header">
      <div
        className="layout__header__wrapper"
        onClick={() => moveToUserPage()}
        style={link && { cursor: "pointer" }}
      >
        <Profile url={url} id={username ?? "통신불량"} size="32" />
      </div>
      <div className="dots__container">
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
          alt="dots"
        ></img>
      </div>
    </header>
  );
};
export default LayoutHeader;
