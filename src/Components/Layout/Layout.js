import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutHeader from "./LayoutHeader";
import LayoutImgBox from "./LayoutImgBox";
import LayoutCmtBox from "./LayoutCmtBox";
import LayoutContent from "./LayoutContent";
import LayoutIconBox from "./LayoutIconBox";
import LayoutCmtInput from "./LayoutCmtInput";
import { findUser } from "store/user";
import * as postAction from "store/post";
import * as commentAction from "store/comment";

const Layout = props => {
  const { post, postId } = props;
  const dispatch = useDispatch();
  const foundUser = useSelector(state => state.user?.foundUser);

  const handleUser = () => {
    dispatch(findUser(post?.User?.username));
  };

  useEffect(() => {
    handleUser();
  }, []);

  const createComment = content => {
    dispatch(commentAction.createComment(postId, content));
  };

  const updateComment = (commentID, content) => {
    // ㄴ자식이 주는 인자
    dispatch(commentAction.changeComment(postId, commentID, content));
    // ㄴ실제 리덕스엔 부모가 이렇게 주고있음
  };

  const deleteComment = commentID => {
    dispatch(commentAction.deleteComment(postId, commentID));
  };

  const likePost = () => {
    dispatch(postAction.likePost(postId));
  };

  const unlikePost = () => {
    dispatch(postAction.unlikePost(postId));
  };

  useEffect(() => {
    dispatch(postAction.getPost(postId));
    dispatch(commentAction.getComments(postId));
  }, [postId]);

  return (
    <div className="layout">
      <LayoutHeader username={post?.User.username} url={foundUser?.image_url} />
      <LayoutImgBox url={post.images?.[0]?.url ?? null} size="600" />
      <section className="layout__bottom">
        <LayoutIconBox
          post={post}
          likePost={likePost}
          unlikePost={unlikePost}
        />
        <LayoutContent post={post} />
        <LayoutCmtBox
          // 메인에서 댓글 달 때 문제가 생기는데 문제를 모르겠음..
          post={post}
          updateComment={updateComment}
          deleteComment={deleteComment}
        />
        <LayoutCmtInput size={540} createComment={createComment} />
      </section>
    </div>
  );
};

export default Layout;
