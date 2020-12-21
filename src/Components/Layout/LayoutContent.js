import React from "react";
import "./layout__cmt__box.scss";

const LayoutContent = props => {
  return (
    <span>
      <b className="comment__box__nickname">{props.username}</b>
      {props.desc}
    </span>
  );
};

export default LayoutContent;
