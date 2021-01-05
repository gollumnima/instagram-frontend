import React, { useEffect } from "react";
import Wrapper from "Components/Wrapper/Wrapper";
import LayoutImgBox from "Components/Layout/LayoutImgBox";
import LayoutCmtBox from "Components/Layout/LayoutCmtBox";
import LayoutHeader from "Components/Layout/LayoutHeader";
import "../../Components/Layout/layout.scss";
import "./detail.scss";
import ModalDetail from "Components/Modal/ModalDetail";
import { instaAPI } from "utils/axios.wrapper";

const Detail = () => {
  return (
    <Wrapper>
      {/* <div className="detail-container">
        <div className="detail-left">
          <LayoutImgBox
            name="feed-uploaded-img"
            url="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120288681_808150636668713_1917941423406171055_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=FSX0lotSjFkAX97Onb9&tp=1&oh=7388996391d84f379d7297138f4e06e7&oe=5FEF3658"
            size="600"
          />
        </div>
        <div className="detail-right">
          <LayoutHeader />
          <LayoutCmtBox
            size="335"
            username="dooreplay"
            desc="조랭이떡 귀여운 우리 아인이"
          />
        </div>
      </div> */}
      <ModalDetail />
    </Wrapper>
  );
};

export default Detail;
