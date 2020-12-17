import React, { useState, useEffect } from "react";
import dummyApi from "utils/dummyApi";
import { instaAPI } from "utils/axios.wrapper";

const PostList = props => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    // dummyApi().then(data => {
    //   setUserList(data);
    // });
    instaAPI.get(`/api/posts`).then(({ data }) => {
      setUserList(userList.concat(data.rows));
    });
  }, []);

  console.log(userList[0] && userList[0].files);

  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(props, "pppp");
  return (
    <div className="mypage-feed-container">
      <div className="my-card-wrapper">
        {props.activeTab === "posts" &&
          userList.length > 1 &&
          userList &&
          userList?.map(el => (
            <>
              <div
                className="my-img-card"
                // onMouseEnter={() => setOverlay(true)}
                // onMouseLeave={() => setOverlay(false)}
                key={el?.files[0]?.post_id}
                style={{ backgroundImage: `url(${el?.files[0]?.url})` }}
                onClick={() => setIsModalOpen(!props.isOpen)}
              >
                {el?.files[0]?.url && (
                  <div className="overlay" key={`${el.image}-overlay`}>
                    <ul className="overlay-flex">
                      <li>♥︎ 하트개수</li>
                      <li>☁︎ 댓개수</li>
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
