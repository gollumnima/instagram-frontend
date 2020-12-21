import React from "react";
import "./profile.scss";

const Profile = props => (
  <div className="profile">
    <div className="profile__left">
      <div
        className="profile__img__container"
        style={{ width: `${props.size}px` }}
      >
        <div
          className="profile__img"
          style={{
            backgroundImage: `url(${props.url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: `${props.size}px`,
            height: `${props.size}px`,
            borderRadius: "50%"
          }}
        />
      </div>
      {props.id && (
        <div className="profile__font__container">
          <p className="profile__nickname">{props.id}</p>
          {props.desc && (
            <p
              className="profile__desc"
              style={{ fontSize: `${props.descSize}px` }}
            >
              {props.desc}
            </p>
          )}
        </div>
      )}
    </div>
    <div className="profile__right">
      {props.btn && <span className="profile__btn">{props.btn}</span>}
    </div>
  </div>
);

export default Profile;
