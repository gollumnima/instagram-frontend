import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutContent from "./LayoutContent";
import {
  getComments,
  changeComment,
  getCommentID,
  deleteComment
} from "store/comment";

import "./layout__cmt__box.scss";
import LayoutCmtEditable from "./LayoutCmtEditable";

const LayoutCmtBox = props => {
  const dispatch = useDispatch();

  const postID = useSelector(state => state.post.postNumber);
  const comment = useSelector(state => state.comment);

  const [editable, setEditable] = useState(false);
  const [commentID, setCommentID] = useState(0);
  const [enter, setEnter] = useState(false);

  const handleDoubleClick = id => {
    setEditable(!editable);
    // setCommentID(id);
    dispatch(getCommentID(id));
  };

  const handleMouseEnter = id => {
    dispatch(getCommentID(id));
  };

  const removeComment = () => {
    dispatch(deleteComment(comment.commentID));
  };

  useEffect(() => {
    dispatch(getComments(postID));
  }, []);

  return (
    <div className="comment__box" style={{ width: `${props.size}px` }}>
      <section className="comment__box__feed">
        <div className="comment__box__feed__yours"></div>
        <div className="comment__box__wrapper">
          {comment?.commentList.length ? (
            <span className="comment__box__all">
              댓글 {comment.commentList.length ?? 0}개 모두보기
            </span>
          ) : (
            <></>
          )}

          {comment?.commentList?.map(el => (
            <div className="comment__box__group">
              <span className="comment__box__nickname">{el.User.name}</span>
              <div className="comment__box__content">
                {!editable ? (
                  <>
                    <span onDoubleClick={() => handleDoubleClick(el.id)}>
                      {el.content}
                    </span>
                    <span
                      className="comment__box__content__remove"
                      onMouseEnter={() => handleMouseEnter(el.id)}
                      onClick={() => removeComment()}
                    >
                      x
                    </span>
                  </>
                ) : (
                  // <input
                  //   placeholder={el.content}
                  //   onChange={e => handleChange(e)}
                  //   onKeyPress={e => handleEnter(e)}
                  //   value={commentEdit}
                  // />
                  <LayoutCmtEditable
                    placeholder={el.content}
                    editable={editable}
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
