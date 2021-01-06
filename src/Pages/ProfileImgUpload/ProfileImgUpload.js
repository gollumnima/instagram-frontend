import React, { useState } from "react";
import { useSelector } from "react-redux";
import { instaAPI } from "utils/axios.wrapper";
import Wrapper from "Components/Wrapper/Wrapper";
import Profile from "Components/Profile";
import ImgUploadModal from "./ImgUploadModal";
import "./profile__img__upload.scss";

const ProfileImgUpload = () => {
  const userInfo = useSelector(state => state.user?.userInfo);
  const [uploadModal, setUploadModal] = useState(false);

  const handleProfileUpload = async ev => {
    ev.preventDefault();
    const [file] = ev.target.files;
    const formData = new FormData();
    formData.append("file", file);
    await instaAPI.post("/api/users/self/persona", formData, {
      headers: {
        "content-type": "multipart/form-data"
      }
    });
  };

  return (
    <Wrapper>
      <main className="profile__img__upload">
        <div className="profile__img__upload__wrapper">
          <aside className="profile__img__upload__left">
            <span>프로필 편집</span>
          </aside>
          <article className="profile__img__upload__right">
            <div
              className="profile__img__upload__pf__wrapper"
              onClick={() => setUploadModal(!uploadModal)}
            >
              <div className="profile__img__upload__pf__wrapper__component">
                <Profile url={userInfo?.image_url} size="38" />
              </div>
              <div className="profile__img__upload__username__wrapper">
                <h1>{userInfo?.username}</h1>
                <button>
                  <span>프로필 사진 바꾸기</span>
                </button>
              </div>
            </div>
            <div className="profile__img__upload__box">
              <aside>
                <label className="profile__img__upload__bold">이름</label>
              </aside>
              <input value={userInfo?.name} />
            </div>
            <div className="profile__img__upload__box">
              <aside>
                <label className="profile__img__upload__bold">
                  사용자 이름
                </label>
              </aside>
              <input value={userInfo?.username} />
            </div>
            <div className="profile__img__upload__box">
              <aside>
                <label className="profile__img__upload__bold">소개</label>
              </aside>
              <input value={userInfo?.description} />
            </div>
            <div className="profile__img__upload__box">
              <aside>
                <label className="profile__img__upload__bold">
                  계정 공개여부
                </label>
              </aside>
              <input
                value={userInfo?.status === "PUBLIC" ? "공개" : "비공개"}
              />
            </div>
          </article>
        </div>
      </main>
      {uploadModal && (
        <ImgUploadModal
          onModalClose={setUploadModal}
          onImgUpload={handleProfileUpload}
        />
      )}
    </Wrapper>
  );
};
export default ProfileImgUpload;
