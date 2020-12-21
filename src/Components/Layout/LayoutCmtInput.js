import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import css from "./layout.scss";
import { postComment } from "store/comment";
import { instaAPI } from "utils/axios.wrapper";
import "./layout__cmt__input.scss";

const cn = classNames.bind(css);

const LayoutCmtInput = props => {
  const { onChild } = props;
  const postID = useSelector(state => state.post.postNumber);
  const commentArr = useSelector(state => state.comment);
  console.log(commentArr);

  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const handleChange = e => {
    const commentValue = e.target.value;
    setComment(commentValue);
  };

  const handleSubmit = () => {
    setCommentList(commentList.concat(comment));
    setComment("");
    onChild(commentList);
    postComment(commentList, postID);
  };

  const handleEnter = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };
  console.log(comment, "com");
  useEffect(() => {
    instaAPI.post(`/api/comments/${postID}`, comment).then(res => {
      if (res.status === 200) {
        console.log("코멘트 달기 성공");
      }
    });
  }, []);
  console.log(postID, " po");
  return (
    <section className="comment__input">
      <div className="comment__input__wrapper">
        <input
          placeholder="댓글달기..."
          onChange={e => handleChange(e)}
          onKeyPress={e => handleEnter(e)}
          value={comment}
        ></input>
        <button className="comment__input__btn" onClick={handleSubmit}>
          <span
            className={cn(
              comment
                ? "comment__input__btn__active"
                : "comment__input__btn__deactive"
            )}
          >
            게시
          </span>
        </button>
      </div>
    </section>
  );
};

export default LayoutCmtInput;
