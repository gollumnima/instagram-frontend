import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutHeader from "Components/Layout/LayoutHeader";
import LayoutImgBox from "Components/Layout/LayoutImgBox";
import LayoutContent from "Components/Layout/LayoutContent";
import LayoutCmtBox from "Components/Layout/LayoutCmtBox";
import LayoutCmtInput from "Components/Layout/LayoutCmtInput";
import LayoutIconBox from "Components/Layout/LayoutIconBox";
import * as postAction from "store/post";
import * as commentAction from "store/comment";
import { findUser } from "store/user";
import "./modal__detail.scss";

const ModalDetail = ({ postId }) => {
  const dispatch = useDispatch();
  const post = useSelector(state => state?.post?.post);
  const userInfo = useSelector(state => state?.user?.foundUser);
  const handleUser = () => {
    dispatch(findUser(post?.User?.username || 1));
  };

  useEffect(() => {
    handleUser();
  }, []);

  const createComment = content => {
    dispatch(commentAction.createComment(postId, content));
  };

  const updateComment = (commentID, content) => {
    dispatch(commentAction.changeComment(postId, commentID, content));
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

  if (!post) return <>게시물 불러오는중...</>;

  return (
    <article className="modal__detail">
      <div className="modal__detail__left">
        <LayoutImgBox url={post.images?.[0]?.url ?? null} size="600" />
      </div>
      <div className="modal__detail__right">
        <LayoutHeader username={post.User.username} url={userInfo?.image_url} />
        <LayoutContent post={post} />
        <LayoutCmtBox
          // post={post}
          updateComment={updateComment}
          deleteComment={deleteComment}
        />
        <LayoutIconBox
          post={post}
          likePost={likePost}
          unlikePost={unlikePost}
        />
        <LayoutCmtInput size={280} createComment={createComment} />
      </div>
    </article>
  );
};
export default ModalDetail;
