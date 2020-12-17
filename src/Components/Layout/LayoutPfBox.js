import React from "react";
import Profile from "Components/Profile";
import { useSelector } from "react-redux";
import "./layout.scss";

const LayoutPfBox = () => {
  const user = useSelector(state => state.user);

  return (
    <header className="layout-pf-header">
      <div className="layout-pf-container">
        <Profile
          url={
            user[0]?.image_url ??
            "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120288681_808150636668713_1917941423406171055_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=FSX0lotSjFkAX97Onb9&tp=1&oh=7388996391d84f379d7297138f4e06e7&oe=5FEF3658"
          }
          id={user[0]?.username ?? "dooreplay"}
          size="32"
          btn="팔로잉"
        />
      </div>
      <div className="feed-dots-container">
        <img
          className="feed-dots"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
          alt="dots"
        ></img>
      </div>
    </header>
  );
};
export default LayoutPfBox;
