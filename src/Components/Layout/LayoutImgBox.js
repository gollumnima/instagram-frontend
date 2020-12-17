import React from "react";
import "./layout.scss";

const LayoutImgBox = props => {
  return (
    <>
      <div className="feed-img-container">
        <img
          className="feed-uploaded-img"
          alt={props.name}
          src={props.url}
          size={`${props.size}px`}
          style={{ width: `${props.size}px` }}
        ></img>
      </div>
    </>
  );
};

export default LayoutImgBox;
