import React from "react";
import Profile from "Components/Profile";
import { useSelector } from "react-redux";
import "./layout__header.scss";

const LayoutHeader = props => {
  const user = useSelector(state => state.user);

  return (
    <header className="layout__header">
      <div className="layout__header__wrapper">
        <Profile
          url={
            // user의 이미지도 나중에 불러올 수 있게 고치기! 수정하기! 검색에 걸려라!
            user.userInfo?.image_url ??
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120288681_808150636668713_1917941423406171055_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=FSX0lotSjFkAX97Onb9&tp=1&oh=7388996391d84f379d7297138f4e06e7&oe=5FEF3658"
          }
          id={props.username ?? "통신불량"}
          size="32"
        />
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
