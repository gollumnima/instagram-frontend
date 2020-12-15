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
      console.log(data);
      userList.concat(data.rows);
    });
  }, []);
  console.log(userList);
  return (
    <div className="mypage-feed-container">
      <div className="my-card-wrapper">
        {props.activeTab === "posts" &&
          userList.length > 1 &&
          userList?.map(el => (
            <>
              <div
                className="my-img-card"
                // onMouseEnter={() => setOverlay(true)}
                // onMouseLeave={() => setOverlay(false)}
                key={el.image}
                style={{ backgroundImage: `url(${el.image})` }}
              >
                <div className="overlay" key={`${el.image}-overlay`}>
                  <ul className="overlay-flex">
                    <li>♥︎ 하트개수</li>
                    <li>☁︎ 댓개수</li>
                  </ul>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default PostList;
