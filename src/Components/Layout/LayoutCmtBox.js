import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutContent from "./LayoutContent";
// import // getComments,
// // changeComment,
// // getCommentID,
// // deleteComment
// "store/comment";
import "./layout__cmt__box.scss";
import LayoutCmtEditable from "./LayoutCmtEditable";

/// 이렇게 하면 여기는 stateless 가 돼
/// 그럼 맥락(상태,리덕스 등)에 영향받지 않게 되니깐
/// 재사용성이 높아지지
/// 이 컴포넌트를 목록에서 쓸지 단일게시물에서 쓸지는 부모가 결정하게 하는거야!
/// 부모가 deleteComment 에서 단일게시물 리덕스 액션을 호출하면 이 댓글 컴포넌트는 단일게시물 용도로 쓰일수있고
/// 부모가 deleteComment 에서 목록에 대한 리덕스 액션을 호출하면 이 댓글 컴포넌트는 목록 용도로 쓰일수있고
const LayoutCmtBox = props => {
  const { post, getComments, updateComment, deleteComment } = props;
  // const dispatch = useDispatch();
  // const postID = useSelector(state => state.post.postNumber);
  const comments = useSelector(state => state.comment.commentList);

  const [editingComment, setEditingComment] = useState(null);
  // const [enter, setEnter] = useState(false);

  const handleDoubleClick = id => {
    setEditingComment(id);
  };

  const removeComment = commentID => {
    deleteComment(commentID);
    // dispatch(deleteComment(props.postNumber, commentID));
  };

  // useEffect(() => {
  //   // getComments && getComments();
  //   // dispatch(getComments(props.postNumber));
  // }, [post.id]);

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
