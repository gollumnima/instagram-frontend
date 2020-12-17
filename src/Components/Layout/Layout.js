import React, { useState, useEffect } from "react";
import LayoutPfBox from "./LayoutPfBox";
import LayoutImgBox from "./LayoutImgBox";
import LayoutCmtBox from "./LayoutCmtBox";
// import dummyApi from "utils/dummyApi";

const Layout = props => {
  // const [userList, setUserList] = useState([]);

  // useEffect(() => {
  //   dummyApi().then(data => {
  //     setUserList(data);
  //   });
  // }, []);

  return (
    <div className="layout-container">
      <LayoutPfBox />
      <LayoutImgBox
        name="feed-uploaded-img"
        url="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120288681_808150636668713_1917941423406171055_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=FSX0lotSjFkAX97Onb9&tp=1&oh=7388996391d84f379d7297138f4e06e7&oe=5FEF3658"
      />
      <LayoutCmtBox username="dooreplay" desc="#조랭이떡 #소중해" />
    </div>
  );
};

export default Layout;
