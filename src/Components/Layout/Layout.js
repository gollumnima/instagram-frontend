import React, { useState, useEffect } from "react";
import LayoutHeader from "./LayoutHeader";
import LayoutImgBox from "./LayoutImgBox";
import LayoutCmtBox from "./LayoutCmtBox";
import LayoutContent from "./LayoutContent";
import LayoutIconBox from "./LayoutIconBox";
import LayoutCmtInput from "./LayoutCmtInput";
import { useSelector } from "react-redux";

const Layout = props => {
  return (
    <div className="layout">
      <LayoutHeader username={props.username} />
      <LayoutImgBox name="feed-uploaded-img" url={props.img} size="600" />
      <section className="layout__bottom">
        <LayoutIconBox />
        <LayoutContent content={props.content} username={props.username} />
        <LayoutCmtBox username={props.username} />
        <LayoutCmtInput size={540} />
      </section>
    </div>
  );
};

export default Layout;
