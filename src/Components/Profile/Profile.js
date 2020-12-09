import React from "react";
import "./profile.scss";

const Profile = props => (
  <div className="profile-container">
    <div className="profile-left">
      <div className="pf-img-container" style={{ width: `${props.size}px` }}>
        <img className="profile-img" alt="profile" src={props.url}></img>
      </div>
      {props.id && (
        <div className="pf-font-container">
          <p className="profile-id">{props.id}</p>
          {props.desc && (
            <p
              className="profile-desc"
              style={{ fontSize: `${props.descSize}px` }}
            >
              {props.desc}
            </p>
          )}
        </div>
      )}
    </div>
    <div className="profile-right">
      {props.btn && <span className="profile-btn">{props.btn}</span>}
    </div>
  </div>
);

export default Profile;
