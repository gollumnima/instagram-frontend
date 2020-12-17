import React, { useState, useEffect } from "react";
import Profile from "Components/Profile";
import dummyApi from "utils/dummyApi";
import "./recommend.scss";

const Recommend = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    dummyApi().then(data => {
      setUserList(data);
    });
  }, []);
  console.log(userList);

  return (
    <div className="recommend-container">
      <div className="recommend-words-container">
        <span className="recommend-left">회원님을 위한 추천</span>
        <span className="recommend-right">모두보기</span>
      </div>
      <div className="recommend-list">
        {userList?.map(el => (
          <Profile
            key={el.image}
            url={el.image}
            id={el.user.name}
            btn="팔로우"
            size="32"
            desc="_vraiment님 외 13명이 팔로우 하고있습니다"
            descSize="12"
          />
        ))}
      </div>
    </div>
  );
};

export default Recommend;
