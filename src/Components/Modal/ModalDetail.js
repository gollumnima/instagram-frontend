import React, { useState, useEffect } from "react";
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
    dispatch(findUser(post?.User?.id || 1));
    //userInfo null 나올때 방지턱 마련하기
  };

  useEffect(() => {
    handleUser();
  }, []);
  // const [imgURL, setImgURL] = useState("");
  // const [userID, setUserID] = useState("");
  // const [content, setContent] = useState("");
  // const [commentList, setCommentList] = useState([]);

  // 지금 자식이 부모가 주는 함수 호출할때, postID 없이 호출하고있어~
  // 그래서 모든 함수가 다 인자가 하나씩 줄어들어
  // const getComments = () => {
  //   // ㄴ자식이 주는 인자
  //   dispatch(commentAction.getComments(postID));
  //   // ㄴ실제 리덕스엔 부모가 이렇게 주고있음
  // };
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
          post={post}
          // getComments={getComments}
          updateComment={updateComment}
          deleteComment={deleteComment} // <-- OK
          // deleteComment={(param) => deleteComment(param)} <-- OK (진짜로 인자가 하나가 맞다면)
          // deleteComment={(param1, param2) => deleteComment(param1, param2)} <-- OK (진짜로 인자가 두개가 맞다면)
          // deleteComment={(...params) => deleteComment(...params)} <-- OK 첫번째꺼랑 똑같은 뜻
          // deleteComment={deleteComment()} <-- 이게 커리함수가 아니라면 에러
        />
        <LayoutIconBox
          post={post}
          likePost={likePost}
          unlikePost={unlikePost}
          // postNumber={props.postNumber}
          // selectedPost={props.selectedPost}
        />
        <LayoutCmtInput
          // postNumber={props.postNumber}
          size={280}
          createComment={createComment}
        />
      </div>
    </article>
  );
};
export default ModalDetail;
