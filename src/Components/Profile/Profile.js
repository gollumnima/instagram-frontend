import React from "react";
import "./profile.scss";

const Profile = props => (
  <div className="profile-container">
    <div className="pf-img-container">
      <img className="profile-img" alt="profile" src={props.url}></img>
    </div>
    <div className="pf-font-container">
      <p className="profile-id">{props.id}</p>
      {props.desc && <p className="profile-desc">{props.desc}</p>}
    </div>
    {props.btn && <span className="profile-btn">{props.btn}</span>}
  </div>
);

export default Profile;
