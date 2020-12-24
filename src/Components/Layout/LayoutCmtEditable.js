import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, changeComment, getCommentID } from "store/comment";
import "./layout__cmt__box.scss";

const LayoutCmtEditable = props => {
  const dispatch = useDispatch();
  const { comment, onSubmit } = props;
  const postID = useSelector(state => state.post.postNumber);

  const [content, setContent] = useState(comment.content);

  const handleChange = e => {
    setContent(e.target.value);
  };

  const handleEnter = e => {
    if (e.key === "Enter") {
      e.preventDefault();
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
