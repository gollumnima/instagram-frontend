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

  // 나중에 메인 피드에 뿌릴 데이터 따로 만들기! 지금은 test1의 것으로..!
  // 피드에 나오는 데이터는 어떤 기준으로 선정해야 할까?!
  useEffect(() => {
    instaAPI
      .get(`/api/posts`, {
        params: {
          offset: 1,
          limit: 5
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
                  username={el.User?.username}
                  img={el?.images[0]?.url}
                  content={el.content}
                />
              ))}
            </div>
            <div className="main-right">
              <div className="my-pf-container">
                <Profile
                  url={
                    user.userInfo?.image_url ??
                    "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120288681_808150636668713_1917941423406171055_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=FSX0lotSjFkAX97Onb9&tp=1&oh=7388996391d84f379d7297138f4e06e7&oe=5FEF3658"
                  }
                  id={user.userInfo?.username ?? "dooreplay"}
                  desc={user.userInfo?.description ?? "Doori Kim"}
                  btn="전환"
                  size="56"
                />
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
