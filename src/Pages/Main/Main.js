import React, { useState, useEffect } from "react";
import Wrapper from "Components/Wrapper/Wrapper";
import Layout from "Components/Layout/Layout";
import Profile from "Components/Profile";
import Recommend from "Components/Recommend";
import LiveStories from "Components/LiveStories";
import { useSelector } from "react-redux";
import { instaAPI } from "utils/axios.wrapper";
import "./main.scss";

const Main = props => {
  const user = useSelector(state => state.user);
  const [feed, setFeed] = useState([]);

  console.log(feed);
  // 나중에 메인 피드에 뿌릴 데이터 따로 만들기! 지금은 test1의 것으로..!
  // 피드에 나오는 데이터는 어떤 기준으로 선정해야 할까?!
  useEffect(() => {
    instaAPI
      .get(`/api/posts`, {
        params: {
          offset: 0,
          limit: 7
        }
      })
      .then(({ data }) => {
        setFeed(data.rows);
      });
  }, []);

  return (
    <>
      <Wrapper>
        <div className="main-container">
          <div className="main-inner">
            <div className="main-left">
              <LiveStories />
              {feed.map(el => (
                <Layout
                  id={el?.User?.id}
                  username={el.User?.username}
                  img={el?.images[0]?.url}
                  content={el.content}
                />
              ))}
            </div>
            <div className="main-right">
              <div className="my-pf-container">
                {user.userInfo && (
                  <Profile
                    url={user.userInfo?.image_url}
                    id={user.userInfo?.username}
                    desc={user.userInfo?.description}
                    //btn="전환"
                    size="56"
                  />
                )}
              </div>
              <Recommend />
            </div>
            <div className="main-right-guard" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Main;
