import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutContent from "./LayoutContent";
import { getComments, changeComment } from "store/comment";

import "./layout__cmt__box.scss";

const LayoutCmtBox = props => {
  const dispatch = useDispatch();

  const postID = useSelector(state => state.post.postNumber);
  const comment = useSelector(state => state.comment);

  const [editable, setEditable] = useState(false);
  const [commentEdit, setCommentEdit] = useState("");
  const [commentID, getCommentID] = useState(0);

  const handleChange = e => {
    setCommentEdit(e.target.value);
  };

  const handleDoubleClick = id => {
    setEditable(!editable);
    dispatch(getCommentID(id));

    console.log(id, "id");
    console.log(comment, "dsf");
  };

  const handleEnter = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(changeComment(commentEdit, comment.commentID));
      setEditable(!editable);
      setCommentEdit("");
    }
  };

  useEffect(() => {
    dispatch(getComments(postID));
  }, []);

  console.log(comment.commentID, "cococo");
  return (
    <div className="comment__box" style={{ width: `${props.size}px` }}>
      <section className="comment__box__feed">
        <div className="comment__box__feed__yours"></div>
        <div className="comment__box__wrapper">
          {comment.commentList.length ? (
            <span className="comment__box__all">
              댓글 {comment.commentList.length ?? 0}개 모두보기
            </span>
          ) : (
            <></>
          )}

          {comment.commentList?.map(el => (
            <div className="comment__box__group">
              <span className="comment__box__nickname">{el.User.name}</span>
              <div className="comment__box__content">
                {!editable ? (
                  <>
                    <span onDoubleClick={() => handleDoubleClick(el.id)}>
                      {el.content}
                    </span>
                    <span className="comment__box__content__remove">x</span>
                  </>
                ) : (
                  <input
                    placeholder={el.content}
                    // onDoubleClick={() => handleDoubleClick()}
                    onChange={e => handleChange(e)}
                    onKeyPress={e => handleEnter(e)}
                    value={commentEdit}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LayoutCmtBox;
