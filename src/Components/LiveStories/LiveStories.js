import React, { useEffect, useState } from "react";
import dummyApi from "utils/dummyApi";
import Profile from "../Profile/Profile";
import "./liveStories.scss";

const LiveStories = () => {
  const [profileData, setProfileData] = useState([]);
  useEffect(() => {
    dummyApi().then(res => {
      setProfileData(res);
    });
  }, []);

  return (
    <div className="live-story-container">
      {profileData.map(el => (
        <div key={el.image} className="live-story-wrapper">
          <Profile url={el.image} size="56" />
          <span>{el.user.name}</span>
        </div>
      ))}
    </div>
  );
};

export default LiveStories;
