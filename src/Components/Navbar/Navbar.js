import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-left">
        <img className="nav-left-words" src="/instalogo.png" alt="insta"></img>
      </div>
      <div className="nav-mid">
        <input className="nav-input"></input>
        <div className="nav-mid-box">
          <div className="input-img-container">
            <img
              className="search-icon"
              src="http://www.clker.com/cliparts/w/r/Q/0/x/D/search-icon-light-grey-md.png"
              alt="search-icon"
            ></img>
          </div>
          <span className="search-word">검색</span>
        </div>
      </div>
      <div className="nav-right">
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          alt="search"
        ></img>
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt="heart"
        ></img>
        <img
          src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          alt="my"
        ></img>
      </div>
    </div>
  );
};

export default Navbar;
