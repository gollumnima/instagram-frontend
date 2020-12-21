import React, { useState, useEffect } from "react";
import LayoutHeader from "Components/Layout/LayoutHeader";
import LayoutImgBox from "Components/Layout/LayoutImgBox";
import LayoutContent from "Components/Layout/LayoutContent";
import LayoutCmtBox from "Components/Layout/LayoutCmtBox";
import LayoutCmtInput from "Components/Layout/LayoutCmtInput";
import LayoutIconBox from "Components/Layout/LayoutIconBox";
import { instaAPI } from "utils/axios.wrapper";
import "./modal__detail.scss";

const ModalDetail = props => {
  const [imgURL, setImgURL] = useState("");
  const [userID, setUserID] = useState("");
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    instaAPI
      .get(`/api/posts/${props.match.params.id}`, {
        headers: {
          "content-type": "multipart/form-data"
        }
      })
      .then(({ data }) => {
        console.log(data, "dddddddd");
        setImgURL(data.files[0].url);
        setUserID(data.User.username);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <article className="modal__detail">
      <div className="modal__detail__left">
        <LayoutImgBox
          alt={true ?? `dooreplay`}
          url={imgURL ?? null}
          size="600"
        />
      </div>
      <div className="modal__detail__right">
        <LayoutHeader
          username={userID}
          // img={imgURL}
        />
        <LayoutContent />
        <LayoutCmtBox />
        <LayoutIconBox />
        <LayoutCmtInput onChild={setCommentList} />
      </div>
    </article>
  );
};
export default ModalDetail;
