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

  // const [editable, setEditable] = useState(false);
  // 어제 말했자나 ㅠ
  // boolean 이 아니라 숫자
  const [editingComment, setEditingComment] = useState(null); // 이거를
  const [enter, setEnter] = useState(false);

  const handleDoubleClick = id => {
    // setEditable(!editable);
    // setCommentID(id);
    setEditingComment(id);
    // dispatch(getCommentID(id));
  };

  // const handleMouseEnter = id => {
  //   dispatch(getCommentID(id));
  // };

  const removeComment = commentID => {
    dispatch(deleteComment(postID, commentID));
  };

  useEffect(() => {
    dispatch(getComments(postID));
  }, []);

  // 기다려봐!
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
                {/* {!editable ? ( */}
                {/* // 이러면 뭐야?
                // editingComment = 수정중인 댓글의 아이디
                // comment.id === editingComment
                // 이 댓글의 아이디가 수정중인 댓글의 아이디 인지?
                // 이 댓글이 수정중인지 */}
                {editingComment === comment.id ? (
                  <LayoutCmtEditable
                    comment={comment}
                    onSubmit={() => {
                      setEditingComment(null);
                      // 댓글수정을 완료했으면
                      // 수정중인 댓글 아이디를 null로 바꿔줘야지
                      // 그래야 아무도 수정중이 아니게 되니깐
                    }}
                  />
                ) : (
                  <>
                    <span onDoubleClick={() => handleDoubleClick(comment.id)}>
                      {comment.content}
                    </span>
                    <span
                      className="comment__box__content__remove"
                      // onMouseEnter={() => handleMouseEnter(comment.id)}
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
