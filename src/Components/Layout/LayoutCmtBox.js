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
  const comments = useSelector(state => state.comment.commentList);

  const [editingComment, setEditingComment] = useState(null); // 이거를
  const [enter, setEnter] = useState(false);

  const handleDoubleClick = id => {
    setEditingComment(id);
  };

  const removeComment = commentID => {
    dispatch(deleteComment(props.postNumber, commentID));
  };

  useEffect(() => {
    dispatch(getComments(props.postNumber));
  }, []);

  return (
    <div className="comment__box" style={{ width: `${props.size}px` }}>
      <section className="comment__box__feed">
        <div className="comment__box__feed__yours"></div>
        <div className="comment__box__wrapper">
          {!!comments?.length && (
            <span className="comment__box__all">
              댓글 {comments.length ?? 0}개 모두보기
            </span>
          )}

          {comments?.map(comment => (
            <div key={comment.id} className="comment__box__group">
              <span className="comment__box__nickname">
                {comment.User.name}
              </span>
              <div className="comment__box__content">
                {editingComment === comment.id ? (
                  <LayoutCmtEditable
                    comment={comment}
                    postNumber={props.postNumber}
                    onSubmit={() => {
                      setEditingComment(null);
                    }}
                  />
                ) : (
                  <>
                    <span onDoubleClick={() => handleDoubleClick(comment.id)}>
                      {comment.content}
                    </span>
                    <span
                      className="comment__box__content__remove"
                      onClick={() => removeComment(comment.id)}
                    >
                      x
                    </span>
                  </>
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
