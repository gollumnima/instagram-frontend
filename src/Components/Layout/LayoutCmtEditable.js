import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, changeComment, getCommentID } from "store/comment";
import "./layout__cmt__box.scss";

const LayoutCmtEditable = props => {
  const dispatch = useDispatch();
  const { comment, onSubmit } = props;
  console.log("나 이 댓글 수정해", comment);
  console.log("comment.content", comment.content);
  const postID = useSelector(state => state.post.postNumber);
  // const [editable, setEditable] = useState(false);
  // ㄴ 상태면 안돼
  // ㄴ 부모가 정하잖아 얘가 수정중인지
  // ㄴ 부모랑 자식이 똑같은 상태를 각각 가지면
  // ㄴ 무한루프 돌 수 있고
  // ㄴ single source of truth 도 아니야

  const [content, setContent] = useState(comment.content);
  // const [enter, setEnter] = useState(props.enter);
  // ㄴ 얘도 상태 아냐

  const handleChange = e => {
    setContent(e.target.value);
  };

  const handleEnter = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      // 그럼 이때 어떻게 엔터를 부모한테 줘~?
      setContent("");
      dispatch(changeComment(postID, comment.id, content));
      onSubmit();
      // setEditable(!editable);
    }
  };

  return (
    <div className="comment__box__content">
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={e => handleChange(e)}
        onKeyPress={e => handleEnter(e)}
        value={content}
      />
    </div>
  );
};
export default LayoutCmtEditable;
