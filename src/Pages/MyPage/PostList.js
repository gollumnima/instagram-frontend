import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { instaAPI } from "utils/axios.wrapper";
import { getPostNumber } from "store/post";

const PostList = props => {
  const { onModal } = props;
  const post = useSelector(state => state.post);
  const dispatch = useDispatch();

  const [userList, setUserList] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    instaAPI.get(`/api/posts`).then(({ data }) => {
      setUserList(userList.concat(data.rows));
    });
  }, []);

  const handleModal = id => {
    setModal(!modal);
    onModal(modal);
    dispatch(getPostNumber(id));
  };

  return (
    <div className="mypage-feed-container">
      <div className="my-card-wrapper">
        {userList.length > 1 &&
          userList &&
          userList?.map(el => (
            <>
              <div
                className="my-img-card"
                // onMouseEnter={() => setOverlay(true)}
                // onMouseLeave={() => setOverlay(false)}
                key={el?.files[0]?.post_id}
                style={{ backgroundImage: `url(${el?.files[0]?.url})` }}
                onClick={() => handleModal(el.id)}
              >
                {el?.files[0]?.url && (
                  <div className="overlay" key={`${el.image}-overlay`}>
                    <ul className="overlay-flex" key={`${el.image}-shadow`}>
                      <li key={`${el.image}-heart`}>♥︎ 하트개수</li>
                      <li key={`${el.image}-comment`}>☁︎ 댓개수</li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default PostList;
