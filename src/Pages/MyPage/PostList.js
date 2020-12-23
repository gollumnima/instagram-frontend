import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { instaAPI } from "utils/axios.wrapper";
import { getPostNumber } from "store/post";
import { getComments } from "store/comment";

const PostList = props => {
  const { onModal } = props;
  const post = useSelector(state => state.post);
  const commentList = useSelector(state => state.comment.commentList);

  const dispatch = useDispatch();

  const [userList, setUserList] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    instaAPI.get(`/api/posts`).then(({ data }) => {
      setUserList(userList.concat(data.rows));
    });
  }, []);

  const handleModal = () => {
    setModal(!modal);
    onModal(modal);
  };

  const handleMouse = id => {
    dispatch(getPostNumber(id));
    dispatch(getComments(id));
  };

  return (
    <div className="mypage-feed-container">
      <div className="my-card-wrapper">
        {userList.length > 1 &&
          userList &&
          userList?.map(el => (
            <>
              <section
                className="my-img-card"
                // onMouseEnter={() => setOverlay(true)}
                // onMouseLeave={() => setOverlay(false)}
                key={el?.images[0]?.post_id}
                style={{ backgroundImage: `url(${el?.images[0]?.url})` }}
                onClick={() => handleModal()}
                onMouseEnter={() => handleMouse(el.id)}
              >
                {el?.images[0]?.url && (
                  <div className="overlay" key={`${el.image}-overlay`}>
                    <ul className="overlay-flex" key={`${el.image}-shadow`}>
                      <li key={`${el.image}-heart`}>♥︎ 하트개수</li>
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
