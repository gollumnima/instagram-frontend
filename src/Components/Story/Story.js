import React from "react";
import Profile from "Components/Profile";
import "./story.scss";

const Story = () => {
  return (
    <div className="story-pf-container">
      <Profile
        url="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/125803772_1165915217177196_1415869914155524541_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=vaag0qgslDgAX9gbJ37&tp=1&oh=d0361b58ee6dc19984ba4f418f32e3a8&oe=5FEF30DE"
        id="dooreplay"
        desc="ediko님 외 13명이 팔로우합니다"
        btn="팔로우"
      />
    </div>
  );
};

export default Story;
