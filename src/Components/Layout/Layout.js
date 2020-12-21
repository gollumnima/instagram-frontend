import React, { useState, useEffect } from "react";
import LayoutHeader from "./LayoutHeader";
import LayoutImgBox from "./LayoutImgBox";
import LayoutCmtBox from "./LayoutCmtBox";
import LayoutIconBox from "./LayoutIconBox";
import LayoutCmtInput from "./LayoutCmtInput";
// import dummyApi from "utils/dummyApi";

const Layout = () => {
  const [commentList, setCommentList] = useState([]);
  return (
    <div className="layout__container">
      <LayoutHeader />
      <LayoutImgBox
        name="feed-uploaded-img"
        url="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120288681_808150636668713_1917941423406171055_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=FSX0lotSjFkAX97Onb9&tp=1&oh=7388996391d84f379d7297138f4e06e7&oe=5FEF3658"
        size="600"
      />
      <LayoutIconBox />

      <LayoutCmtBox
        username="dooreplay"
        desc="#조랭이떡 #소중해"
        commentList={commentList}
      />
      <LayoutCmtInput onChild={setCommentList} />
    </div>
  );
};

export default Layout;
