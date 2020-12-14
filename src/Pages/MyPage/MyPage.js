import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Navbar from "Components/Navbar";
import Profile from "Components/Profile";
import dummyApi from "utils/dummyApi";
import { API } from "utils/config";
// import AuthService from "services/auth-server";
import "./mypage.scss";
import authHeader from "services/auth-header";

const MyPage = () => {
  const user = useSelector(state => state.user);
  const [overlay, setOverlay] = useState(false);
  // const handleMouseOver = e => {
  //   setOverlay(true);
  // };

  const [file, setFile] = useState(null);
  const handleFileChange = e => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", file);
    axios.post(`${API}/1/image`, { headers: authHeader() }, fd).then(res => {
      console.log(res);
    });
  };

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    dummyApi().then(data => {
      setUserList(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="mypage-container">
        <div className="mypage-top-container">
          <div className="mypage-top-upper">
            <div className="mypage-pf-container">
              <Profile
                url={
                  user[0]?.image_url ??
                  "https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s320x320/125803772_1165915217177196_1415869914155524541_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=IxtLOijkWxgAX-v66v1&tp=1&oh=ec27dc5ce5ffe4afeee410a245f6037e&oe=5FFEC0CB"
                }
                size="150"
              />
            </div>
            <div className="mypage-profile-box">
              <div className="my-pf-username">
                <span>{user[0]?.username ?? "dooreplay"} </span>
                <button>
                  <span>프로필 편집</span>
                </button>
                <button>
                  <span onClick={() => fileUploadHandler()}>이미지 업로드</span>
                </button>
                <input
                  type="file"
                  accept="image/jpg,impge/png,image/jpeg,image/gif"
                  // name={file.name}
                  onChange={e => handleFileChange(e)}
                />
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
                  {user[0]?.name ?? "Doori Kim"}
                </span>
                <span className="my-pf-words desc">
                  {user[0]?.description ?? "Girls support girls💪💪"}
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
            <li>게시물</li>
            <li>저장됨</li>
            <li>태그됨</li>
          </ul>
        </div>
        <div className="mypage-feed-container">
          <div className="my-card-wrapper">
            {userList.map(el => (
              <>
                <div
                  className="my-img-card"
                  // onMouseEnter={() => setOverlay(true)}
                  // onMouseLeave={() => setOverlay(false)}
                  key={el.image}
                  style={{ backgroundImage: `url(${el.image})` }}
                >
                  <div className="overlay" key={`${el.image} overlay`}>
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
        <footer>
          <span>소개</span>
          <span>블로그</span>
          <span>인기 계정</span>
          <span>© 2020 Instagram from Doori Kim</span>
        </footer>
      </div>
    </>
  );
};

export default MyPage;
