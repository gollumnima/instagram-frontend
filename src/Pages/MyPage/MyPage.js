import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Wrapper from "Components/Wrapper";
import Tabs from "Components/Tabs";
import Modal from "Components/Modal";
import Profile from "Components/Profile";
import PostList from "./PostList";
import UploadTemplate from "./UploadTemplate";
import SaveList from "./SaveList";
import ModalDetail from "Components/Modal/ModalDetail";
import { instaAPI } from "utils/axios.wrapper";
import "./mypage.scss";

const MyPage = props => {
  const user = useSelector(state => state?.user?.userInfo ?? null);
  // const postList = useSelector(state => state.post.postList);
  // const [img, setImg] = useState("");
  const [modal, setModal] = useState(false);
  const [postNumber, setPostNumber] = useState(null);
  const saves = useSelector(state => state?.save?.savedList);

  // const selectedPost = postList.find(el => el.id === postNumber);
  // const handlePostingImg = id => {
  //   instaAPI
  //     .get(`/api/posts/${id}`)
  //     .then(({ data }) => setImg(data.files[0].url));
  // };

  // useEffect(() => {
  //  postID && handlePostingImg(postID);
  // postNumber !== null &&
  //   instaAPI
  //     .get(`/api/posts/${postNumber}`, {
  //       headers: {
  //         "content-type": "multipart/form-data"
  //       }
  //     })
  //     .then(res => console.log(res, "이백오케"))
  //     .catch(err => console.log(err));
  // }, []);

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
            <Tabs
              tabs={[
                {
                  title: "업로드",
                  render: () => <UploadTemplate />
                },
                {
                  title: "게시물",
                  render: () => (
                    <PostList
                      onModal={postID => {
                        setPostNumber(postID);
                        setModal(true);
                      }}
                    />
                  )
                },
                {
                  title: "저장됨",
                  render: () => <SaveList />
                },
                {
                  title: "태그됨",
                  render: () => <UploadTemplate />
                }
              ]}
              active={0}
              defaultActive={1}
            />
          </div>
        </div>
        {postNumber && <Modal onModalClose={() => setModal(false)} />}
        {/* {modal && (
          <Modal onModalClose={() => setModal(false)}>
            <ModalDetail postID={postNumber} />
          </Modal>
        )} */}
      </Wrapper>
    </>
  );
};

export default MyPage;
