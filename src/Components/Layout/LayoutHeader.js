import React from "react";
import Profile from "Components/Profile";
import { useSelector } from "react-redux";
import "./layout__header.scss";

const LayoutHeader = ({ url, username }) => {
  const user = useSelector(state => state.user);
  return (
    <header className="layout__header">
      <div className="layout__header__wrapper">
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
