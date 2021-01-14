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
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(5);

  const handleScroll = () => {
    let bodyScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    if (
      window.innerHeight + bodyScrollTop >=
      document.documentElement.offsetHeight
    )
      return;
    else {
      setLoading(true);
    }
  };

  useEffect(() => {
    if (loading) {
      console.log("fetching datas");
    }
  }, [loading]);

  const loadData = () => {
    instaAPI
      .get(`/api/posts`, {
        params: {
          offset: offset,
          limit: limit
        }
      })
      .then(({ data }) => {
        setFeed(data.rows);
      });
  };

  const moreData = () => {
    instaAPI
      .get(`/api/posts`, {
        params: {
          offset: offset,
          limit: limit
        }
      })
      .then(({ data }) => {
        setFeed(data.rows);
      });

    setLoading(false);
    setOffset(limit);
    setLimit(limit + 5);
  };

  useEffect(() => {
    loadData();
    window.addEventListener("scroll", throttle(handleScroll, 2000));

    return () => {
      window.removeEventListener("scroll", throttle(handleScroll, 2000));
    };
  }, []);

  useEffect(() => {
    if (loading) {
      moreData();
    }
  }, [loading]);

  console.log(feed);
  return (
    <>
      <Wrapper>
        <div className="main__container">
          <div className="main__inner">
            <div className="main__left">
              <LiveStories />
              {feed.map(el => (
                <Layout
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
