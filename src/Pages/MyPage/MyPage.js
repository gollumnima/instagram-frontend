import React, { useState, useEffect } from "react";
import { Link, Route, useLocation, NavLink, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "Components/Wrapper/Wrapper";
import Tabs from "Components/Tabs";
import Profile from "Components/Profile";
import PostList from "./PostList";
import UploadTemplate from "./UploadTemplate";
import ProfileImgUpload from "Pages/ProfileImgUpload/ProfileImgUpload";
import { findUser, follow, getFollowers, getFollowings } from "store/user";
import "./mypage.scss";

const MyPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state?.user?.userInfo ?? null);
  const followers = useSelector(state => state?.user?.followers);
  const followings = useSelector(state => state?.user?.followings);
  const linkedName = location.pathname.slice(1).split("/")[0];
  const foundUser = useSelector(state => state?.user?.foundUser ?? null);
  const postList = useSelector(state => state?.post?.postList ?? null);
  const [modal, setModal] = useState(false);
  const [postNumber, setPostNumber] = useState(null);
  const saves = useSelector(state => state?.save?.savedList);
  const userFeed = postList.filter(
    el => el.User?.username === userInfo?.username
  );
  const linkedFeed = postList.filter(el => el.User?.username === linkedName);

  useEffect(() => {
    dispatch(
      findUser((linkedName !== "accounts" && linkedName) || userInfo?.username)
    );
  }, []);

  useEffect(() => {
    foundUser?.id && dispatch(getFollowers(foundUser?.id));
    foundUser?.id && dispatch(getFollowings(foundUser?.id));
  }, [foundUser]);

  const handleFollow = id => {
    dispatch(follow(id));
  };

  return (
    <>
      <Wrapper>
        <div className="mypage__container">
          <div className="mypage__container__top">
            <div className="mypage__container__upper">
              <section className="mypage__container__pf__container">
                <Profile url={foundUser?.image_url} size="150" />
              </section>
              <section className="mypage__profile">
                <div className="mypage__profile__username__wrapper">
                  <span className="mypage__profile__username">
                    {foundUser?.username}
                  </span>
                  {(linkedName !== "accounts" && linkedName) ||
                  userInfo?.username ? (
                    <button className="mypage__profile__btn__shell">
                      <span className="mypage__profile__btn__white">
                        프로필 편집
                      </span>
                    </button>
                  ) : (
                    <button className="mypage__profile__btn__shell">
                      {/* effect 때문에 빈 배열일 경우가 있어서 length 조건을 넣어줘야.. */}
                      {followers?.count > 0 &&
                      followers?.rows?.find(
                        el => el?.username === userInfo?.username
                      ) ? (
                        <span className="mypage__profile__btn__white">
                          팔로잉 ✔️
                        </span>
                      ) : (
                        //  언팔기능 추가를 해야함. 작은 마달창을모달을 컴포넌트화 시키기
                        <span
                          className="mypage__profile__btn__blue"
                          onClick={() => handleFollow(userInfo?.id)}
                        >
                          팔로우
                        </span>
                      )}
                    </button>
                  )}
                  {/* // 사람체크 버튼 누르면 동그라미 프로필 + @test1님의 팔로우를 취소하시겠어요? 팔로우취소 빨간글씨 취소  검정 */}
                </div>
                <ul className="mypage__profile__follows">
                  <li className="mypage__profile__flex">
                    <span className="mypage__profile__flex__title">
                      게시물
                      <span className="mypage__profile__flex__nums">
                        {linkedFeed.length}
                      </span>
                    </span>
                  </li>
                  <li className="mypage__profile__flex">
                    <span className="mypage__profile__flex__title">
                      팔로워
                      <span className="mypage__profile__flex__nums">
                        {followers?.count ?? null}
                      </span>
                    </span>
                  </li>
                  <li className="mypage__profile__flex">
                    <span className="mypage__profile__flex__title">
                      팔로우
                      <span className="mypage__profile__flex__nums">
                        {followings?.count ?? null}
                      </span>
                    </span>
                  </li>
                </ul>
                <div className="mypage__profile__desc">
                  <span className="mypage__profile__words username">
                    {foundUser?.name}
                  </span>
                  <span className="mypage__profile__words">
                    {foundUser?.description}
                  </span>
                </div>
              </section>
            </div>
            {/* 스토리 공간 
            <section>
              <div>
                <Profile />
              </div>
            </section> */}
          </div>
          <div className="mypage__feed">
            <nav className="mypage__tabs">
              <ul>
                {userInfo?.username === linkedName && (
                  <li>
                    <NavLink
                      to={`/${foundUser?.username}/upload`}
                      className="mypage__nav__link"
                      activeClassName="activeRoute"
                      isActive={() =>
                        location?.pathname === `/${foundUser?.username}/upload`
                      }
                    >
                      업로드
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink
                    to={`/${foundUser?.username}`}
                    className="mypage__nav__link"
                    activeClassName="activeRoute"
                    isActive={() =>
                      location?.pathname === `/${foundUser?.username}`
                    }
                  >
                    게시물
                  </NavLink>
                </li>
                {userInfo?.username === linkedName && (
                  <li>
                    <NavLink
                      to={`/${foundUser?.username}/saved`}
                      className="mypage__nav__link"
                      activeClassName="activeRoute"
                      isActive={() =>
                        location?.pathname === `/${foundUser?.username}/saved`
                      }
                    >
                      저장됨
                    </NavLink>
                  </li>
                )}
              </ul>
            </nav>
            {/* <Tabs
              tabs={[
                {
                  title: userInfo?.username === foundUser?.username && "업로드",
                  render: () => <UploadTemplate upload="upload" />
                },
                {
                  title: "게시물",
                  render: () => (
                    <PostList
                      postList={
                        userInfo?.username === linkedName
                          ? userFeed
                          : linkedFeed
                      }
                    />
                  )
                },
                {
                  title: userInfo?.username === foundUser?.username && "저장됨",
                  render: () => (
                    <PostList active="2" postList={saves} saved="saved" />
                  )
                }
                // {
                //   title: "태그됨",
                //   render: () => <PostList />
                // }
              ]}
              active={0}
              defaultActive={1}
            /> */}
          </div>

          <Route path="/:username/upload" component={UploadTemplate} />
          <Route
            exact
            path="/:username"
            render={() => (
              <PostList
                postList={
                  userInfo?.username === linkedName ? userFeed : linkedFeed
                }
              />
            )}
          />
          <Route
            path="/:username/saved"
            render={() => <PostList postList={saves} />}
          />
        </div>
      </Wrapper>
    </>
  );
};

export default MyPage;
