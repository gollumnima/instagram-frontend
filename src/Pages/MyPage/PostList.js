import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { instaAPI } from "utils/axios.wrapper";
import { getPostNumber, getCurrentPost, getAllPost } from "store/post";
import { getComments } from "store/comment";
import { createLike } from "store/like";

const PostList = props => {
  const { onModal, setNumber } = props;
  const dispatch = useDispatch();
  const post = useSelector(state => state.post);
  const user = useSelector(state => state.user);
  const commentList = useSelector(state => state.comment.commentList);
  const likeList = useSelector(state => state.like.likeList);

  const [postList, setPostList] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    instaAPI.get(`/api/posts`).then(({ data }) => {
      dispatch(getAllPost(data.rows));
      setPostList(postList.concat(data.rows));
    });
  }, []);

  const handleModal = postList => {
    setModal(!modal);
    onModal(modal);
    dispatch(getCurrentPost(postList));
  };

  const handleMouse = id => {
    setNumber(id);
    dispatch(createLike(user.userInfo.id, id));
    dispatch(getComments(id));
  };

  return (
    <div className="mypage-feed-container">
      <div className="my-card-wrapper">
        {postList.length > 1 &&
          postList &&
          postList?.map(el => (
            <>
              <section
                className="my-img-card"
                // onMouseEnter={() => setOverlay(true)}
                // onMouseLeave={() => setOverlay(false)}
                key={el?.images[0]?.post_id}
                style={{ backgroundImage: `url(${el?.images[0]?.url})` }}
                onClick={() => handleModal(el)}
                onMouseEnter={() => handleMouse(el.id)}
              >
                {el?.images[0]?.url && (
                  <div className="overlay" key={`${el.image}-overlay`}>
                    <ul className="overlay-flex" key={`${el.image}-shadow`}>
                      <li key={`${el.image}-heart`}>
                        ♥︎ {el.Likes?.length ?? 0}
                      </li>
                      <li key={`${el.image}-comment`}>
                        ☁︎ {commentList.length}
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
