import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LayoutHeader from "Components/Layout/LayoutHeader";
import LayoutImgBox from "Components/Layout/LayoutImgBox";
import LayoutContent from "Components/Layout/LayoutContent";
import LayoutCmtBox from "Components/Layout/LayoutCmtBox";
import LayoutCmtInput from "Components/Layout/LayoutCmtInput";
import LayoutIconBox from "Components/Layout/LayoutIconBox";
import { instaAPI } from "utils/axios.wrapper";
import { getPostNumber } from "store/post";
import "./modal__detail.scss";

const ModalDetail = props => {
  const postID = useSelector(state => state.post.postNumber);
  const [imgURL, setImgURL] = useState("");
  const [userID, setUserID] = useState("");
  const [content, setContent] = useState("");
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    instaAPI
      .get(`/api/posts/${props.postNumber}`, {
        headers: {
          "content-type": "multipart/form-data"
        }
      })
      .then(({ data }) => {
        // getPostNumber(data.id);
        setImgURL(data.images[0].url);
        setUserID(data.User.username);
        setContent(data.content);
      })
      .catch(err => console.log(err));
  }, []);

  // useEffect 안에서 params.id 받아서 포스트넘버 저장하기!

  return (
    <article className="modal__detail">
      <div className="modal__detail__left">
        <LayoutImgBox url={imgURL ?? null} size="600" />
      </div>
      <div className="modal__detail__right">
        <LayoutHeader
          username={userID}
          // img={imgURL}
        />
        <LayoutContent content={content} username={userID} />
        <LayoutCmtBox commentList={commentList} postNumber={props.postNumber} />
        <LayoutIconBox
          postNumber={props.postNumber}
          selectedPost={props.selectedPost}
        />
        <LayoutCmtInput postNumber={props.postNumber} />
      </div>
    </article>
  );
};
export default ModalDetail;
