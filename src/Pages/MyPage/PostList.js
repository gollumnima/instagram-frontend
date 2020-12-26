import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { instaAPI } from "utils/axios.wrapper";
import { getPostNumber, getPost, getPosts } from "store/post";
// import { getComments } from "store/comment";
// import { createLike } from "store/like";

const PostList = props => {
  const { onModal, setNumber } = props;
  const dispatch = useDispatch();
  // const post = useSelector(state => state?.post) ?? null;
  const postList = useSelector(state => state?.post?.postList) ?? [];
  // const user = useSelector(state => state.user);
  // const commentList = useSelector(state => state.comment.commentList);
  // const likeList = useSelector(state => state.like.likeList);

  // const [postList, setPostList] = useState([]);
  // const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(getPosts());
    // instaAPI.get(`/api/posts`).then(({ data }) => {
    //   dispatch(getAllPost(data.rows));
    //   setPostList(postList.concat(data.rows));
    // });
  }, []);

  const handleModal = post => {
    // setModal(true);
    dispatch(getPost(post.id));
    onModal(true);
  };

  const handleMouse = id => {
    setNumber(id);
    // dispatch(createLike(user?.userInfo?.id, id));
    // dispatch(getComments(id));
  };

  return (
    <div className="mypage-feed-container">
      <div className="my-card-wrapper">
        {postList?.map(post => (
          <>
            <section
              className="my-img-card"
              // onMouseEnter={() => setOverlay(true)}
              // onMouseLeave={() => setOverlay(false)}
              key={post?.images[0]?.post_id}
              style={{ backgroundImage: `url(${post?.images[0]?.url})` }}
              onClick={() => handleModal(post)}
              onMouseEnter={() => handleMouse(post.id)}
            >
              {post?.images[0]?.url && (
                <div className="overlay" key={`${post.image}-overlay`}>
                  <ul className="overlay-flex" key={`${post.image}-shadow`}>
                    <li key={`${post.image}-heart`}>
                      ♥︎ {post.Likes?.length ?? 0}
                    </li>
                    <li key={`${post.image}-comment`}>
                      ☁︎ {post.Comments?.length ?? 0}
                    </li>
                  </ul>
                </div>
              )}
            </section>
          </>
        ))}
      </div>
    </div>
  );
};

export default PostList;
