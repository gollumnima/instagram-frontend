import React from "react";
import "./layout__img__box.scss";

const LayoutImgBox = props => {
  return (
    <>
      <div className="layout__img__Box">
        <img
          className="layout__img__Box__uploaded"
          alt={props.name}
          src={props.url}
          style={{ width: `${props.size}px` }}
        ></img>
      </div>
    </>
  );
};

export default LayoutImgBox;
