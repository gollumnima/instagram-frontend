import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./layout__cmt__box.scss";
import LayoutCmtEditable from "./LayoutCmtEditable";

const LayoutCmtBox = props => {
  const { updateComment, deleteComment } = props;
  const comments = useSelector(state => state.comment.commentList);

  const [editingComment, setEditingComment] = useState(null);

  const handleDoubleClick = id => {
    setEditingComment(id);
  };

  const removeComment = commentID => {
    deleteComment(commentID);
  };

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
                {comment.User.username}
              </span>
              <div className="comment__box__content">
                {editingComment === comment.id ? (
                  <LayoutCmtEditable
                    comment={comment}
                    onSubmit={(commentId, content) => {
                      updateComment(commentId, content);
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
