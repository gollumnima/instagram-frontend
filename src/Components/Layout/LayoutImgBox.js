import React from "react";
import "./layout__img__box.scss";

const LayoutImgBox = props => {
  return (
    <>
      <div className="layout__img__box">
        <div
          className="layout__img__box__uploaded"
          style={{
            width: `${props.size}px`,
            height: `${props.size}px`,
            backgroundImage: `url(${props.url}`
          }}
        ></div>
      </div>
    </>
  );
};

export default LayoutImgBox;
