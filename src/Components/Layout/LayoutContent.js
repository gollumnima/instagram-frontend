import React from "react";
import "./layout__cmt__box.scss";

const LayoutContent = props => {
  const { post } = props;

  //  if (!post) return <></>;
  return (
    <article className="comment__box__left">
      <span>
        <b className="comment__box__nickname">
          {post ? post.User.username : props.username}
        </b>
        {post ? post.content : props.content}
      </span>
    </article>
  );
};

export default LayoutContent;
