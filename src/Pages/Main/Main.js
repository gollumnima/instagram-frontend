import React, { useState, useEffect } from "react";
import Wrapper from "Components/Wrapper/Wrapper";
import Layout from "Components/Layout/Layout";
import Profile from "Components/Profile";
import Recommend from "Components/Recommend";
import LiveStories from "Components/LiveStories";
import { useSelector } from "react-redux";
import { instaAPI } from "utils/axios.wrapper";
import { throttle } from "lodash";
import "./main.scss";

const Main = () => {
  const user = useSelector(state => state.user);
  const [feed, setFeed] = useState([]);

  const loadData = offset => {
    return instaAPI
      .get(`/api/posts`, {
        params: {
          offset,
          limit: 5
        }
      })
      .then(({ data }) => {
        setFeed(feed.concat(data.rows));
      });
  };

  useEffect(() => {
    loadData(feed.length);

    const handleScroll = throttle(() => {
      const bodyScrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      const currentPosition = window.innerHeight + bodyScrollTop;
      const currentLength = document.documentElement.offsetHeight;

      if (currentPosition < currentLength) return;
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [feed.length]);

  return (
    <>
      <Wrapper>
        <div className="main__container">
          <div className="main__inner">
            <div className="main__left">
              <LiveStories />
              {feed.map(el => (
                <Layout
                  key={el.id}
                  // id={el?.User?.id}
                  // username={el.User?.username}
                  // img={el?.images[0]?.url}
                  // content={el.content}
                  post={el}
                  postId={el?.id}
                  user={el?.User}
                />
              ))}
              {/* {loading && <h1>더 불러오는 중</h1>} */}
            </div>
            <div className="main__right">
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
            <div className="main__right__guard" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Main;
