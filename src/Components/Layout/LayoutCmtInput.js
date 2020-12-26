import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import css from "./layout.scss";
// import { createComment } from "store/comment";
import "./layout__cmt__input.scss";

const cn = classNames.bind(css);

const LayoutCmtInput = props => {
  const { createComment } = props;
  // const dispatch = useDispatch();
  // const postID = useSelector(state => state.post.postNumber);
  const [comment, setComment] = useState("");

  const handleChange = e => {
    const commentValue = e.target.value;
    setComment(commentValue);
  };

  const handleSubmit = () => {
    createComment(comment);
    setComment("");
  };

  const handleEnter = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

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
