import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutHeader from "./LayoutHeader";
import LayoutImgBox from "./LayoutImgBox";
import LayoutCmtBox from "./LayoutCmtBox";
import LayoutContent from "./LayoutContent";
import LayoutIconBox from "./LayoutIconBox";
import LayoutCmtInput from "./LayoutCmtInput";
import { findUser } from "store/user";

const Layout = props => {
  const { id, username, img, content } = props;
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user?.foundUser);

  const handleUser = () => {
    dispatch(findUser(id));
  };

  useEffect(() => {
    handleUser();
  }, []);

  return (
    <div className="layout">
      <LayoutHeader username={username} url={userInfo?.image_url} />
      <LayoutImgBox name="feed-uploaded-img" url={img} size="600" />
      <section className="layout__bottom">
        <LayoutIconBox />
        <LayoutContent content={content} username={username} />
        <LayoutCmtBox username={username} />
        <LayoutCmtInput size={540} />
      </section>
    </div>
  );
};

export default Layout;
