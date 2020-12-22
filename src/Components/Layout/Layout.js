import React, { useState, useEffect } from "react";
import LayoutHeader from "./LayoutHeader";
import LayoutImgBox from "./LayoutImgBox";
import LayoutCmtBox from "./LayoutCmtBox";
import LayoutContent from "./LayoutContent";
import LayoutIconBox from "./LayoutIconBox";
import LayoutCmtInput from "./LayoutCmtInput";
import { useSelector } from "react-redux";
// import dummyApi from "utils/dummyApi";

const Layout = props => {
  const commentList = useSelector(state => state.comment.commentList);
  // const [commentList, setCommentList] = useState([]);

  return (
    <div className="layout">
      <LayoutHeader username={props.username} />
      <LayoutImgBox name="feed-uploaded-img" url={props.img} size="600" />
      <section classNames="layout__bottom">
        <LayoutIconBox />
        <LayoutContent desc={props.content} username={props.username} />
        <LayoutCmtBox username={props.username} />
        <LayoutCmtInput />
      </section>
    </div>
  );
};

export default Layout;
