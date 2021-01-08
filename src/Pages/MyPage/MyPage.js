import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Wrapper from "Components/Wrapper/Wrapper";
import Tabs from "Components/Tabs";
import Profile from "Components/Profile";
import PostList from "./PostList";
import UploadTemplate from "./UploadTemplate";
import SaveList from "./SaveList";
import "./mypage.scss";

const MyPage = props => {
  const user = useSelector(state => state?.user?.userInfo ?? null);
  const postList = useSelector(state => state?.post?.postList ?? null);
  const [modal, setModal] = useState(false);
  const [postNumber, setPostNumber] = useState(null);
  const saves = useSelector(state => state?.save?.savedList);

  const userFeed = postList.filter(e => e.User?.username === user?.username);

  return (
    <>
      <Wrapper>
        <div className="mypage__container">
          <div className="mypage__container__top">
            <div className="mypage__container__upper">
              <section className="mypage__container__pf__container">
                <Profile url={user?.image_url} size="150" />
              </section>
              <section className="mypage__profile">
                <div className="mypage__profile__username">
                  <span>{user?.username ?? undefined} </span>
                  {/* <Link to="/accounts/edit"> */}
                  {/* // 이거 살리면 글씨가 갑자기 커져벌임..! */}
                  <button>
                    <span>프로필 편집</span>
                  </button>
                  {/* </Link> */}
                </div>
                <ul className="mypage__profile__follows">
                  <li className="mypage__profile__flex">
                    <span className="mypage__profile__flex__title">
                      게시물
                      <span className="mypage__profile__flex__nums">
                        {userFeed.length}
                      </span>
                    </span>
                  </li>
                  <li className="mypage__profile__flex">
                    <span className="mypage__profile__flex__title">
                      팔로워
                      <span className="mypage__profile__flex__nums">0</span>
                    </span>
                  </li>
                  <li className="mypage__profile__flex">
                    <span className="mypage__profile__flex__title">
                      팔로우
                      <span className="mypage__profile__flex__nums">0</span>
                    </span>
                  </li>
                </ul>
                <div className="mypage__profile__desc">
                  <span className="mypage__profile__words username">
                    {user?.name ?? "이름 없음"}
                  </span>
                  <span className="mypage__profile__words">
                    {user?.description ?? "Girls support girls💪💪"}
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
            <Tabs
              tabs={[
                {
                  title: "업로드",
                  render: () => <UploadTemplate upload="upload" />
                },
                {
                  title: "게시물",
                  render: () => <PostList postList={userFeed} />
                },
                {
                  title: "저장됨",
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
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default MyPage;
