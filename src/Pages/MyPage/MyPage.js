import React, { useState } from "react";
import { useSelector } from "react-redux";
import Wrapper from "Components/Wrapper";
import Detail from "Pages/Detail";
import Modal from "Components/Modal";
import Profile from "Components/Profile";
import PostList from "./PostList";
import UploadTemplate from "./UploadTemplate";
import "./mypage.scss";

const MyPage = () => {
  const user = useSelector(state => state?.user?.userInfo ?? null);

  const [activeTab, setActiveTab] = useState("posts");

  const tabList = [
    {
      name: "upload",
      displayName: "업로드",
      component: <UploadTemplate activeTab="upload" />
    },
    {
      name: "posts",
      displayName: "게시물",
      component: <PostList activeTab="posts" isOpen={false} />
    },
    {
      name: "saved",
      displayName: "저장됨",
      component: <UploadTemplate activeTab="saved" />
    },
    {
      name: "tagged",
      displayName: "태그됨",
      component: <UploadTemplate activeTab="tagged" />
    }
  ];

  const getComponent = () => {
    const result = tabList
      .filter(tab => tab.name === activeTab)
      .concat(tabList[0])[0].component;
    return result;
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <div className="mypage-container">
          <div className="mypage-top-container">
            <div className="mypage-top-upper">
              <div className="mypage-pf-container">
                <Profile
                  url={
                    user?.image_url ??
                    "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/125803772_1165915217177196_1415869914155524541_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=IxtLOijkWxgAX-v66v1&tp=1&oh=ec27dc5ce5ffe4afeee410a245f6037e&oe=5FFEC0CB"
                  }
                  size="150"
                />
              </div>
              <div className="mypage-profile-box">
                <div className="my-pf-username">
                  <span>{user?.username ?? "dooreplay"} </span>
                  <button>
                    <span>프로필 편집</span>
                  </button>
                </div>
                <ul className="my-pf-follows">
                  <li className="my-pf-flex-wrapper">
                    <span className="my-pf-flex-title">
                      게시물 <span className="my-pf-flex-nums">3</span>
                    </span>
                  </li>
                  <li className="my-pf-flex-wrapper">
                    <span className="my-pf-flex-title">
                      팔로워 <span className="my-pf-flex-nums">1090</span>
                    </span>
                  </li>
                  <li className="my-pf-flex-wrapper">
                    <span className="my-pf-flex-title">
                      팔로우 <span className="my-pf-flex-nums">99</span>
                    </span>
                  </li>
                </ul>
                <div className="my-pf-desc-wrapper">
                  <span className="my-pf-words username">
                    {user?.name ?? "Doori Kim"}
                  </span>
                  <span className="my-pf-words desc">
                    {user?.description ?? "Girls support girls💪💪"}
                  </span>
                </div>
              </div>
            </div>
            <div className="mypage-top-lower">
              <div>
                <Profile />
              </div>
              <span></span>
            </div>
          </div>
          <div className="mypage-feed-property-container">
            <ul>
              {tabList.map(el => (
                <li
                  key={el.name}
                  onClick={() => setActiveTab(el.name)}
                  // className={`${activeTab && `active`}`}
                >
                  {el.displayName}
                </li>
              ))}
            </ul>
          </div>
          {getComponent()}
          <footer>
            <span>소개</span>
            <span>블로그</span>
            <span>인기 계정</span>
            <span>© 2020 Instagram from Doori Kim</span>
          </footer>
        </div>
        {/* {isOpen && ( */}
        <Modal
        // open={modalOpen} close={() => closeModal()}
        >
          <Detail />
        </Modal>
        {/* )} */}
      </Wrapper>
    </>
  );
};

export default MyPage;
