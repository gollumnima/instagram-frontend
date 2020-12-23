import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, changeComment, getCommentID } from "store/comment";
import "./layout__cmt__box.scss";

const LayoutCmtEditable = props => {
  const dispatch = useDispatch();

  const postID = useSelector(state => state.post.postNumber);
  const comment = useSelector(state => state.comment);
  const [editable, setEditable] = useState(false);
  const [commentEdit, setCommentEdit] = useState("");
  const [enter, setEnter] = useState(props.enter);

  const handleChange = e => {
    setCommentEdit(e.target.value);
  };

  const handleEnter = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch(changeComment(commentEdit, comment.commentID));
      setEditable(!editable);
      setCommentEdit("");
      dispatch(getComments(postID));
    }
  };

  return (
    <div className="comment__box__content">
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={e => handleChange(e)}
        onKeyPress={e => handleEnter(e)}
        value={props.commentEdit}
      />
    </div>
  );
};
export default LayoutCmtEditable;
