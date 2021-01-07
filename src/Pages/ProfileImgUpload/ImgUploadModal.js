import React, { useState, useEffect, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProfile } from "store/user";
import "Components/Modal/modal.scss";
import "./img__upload__modal.scss";

const ImgUploadModal = ({ onModalClose, onImgUpload }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user?.userInfo);
  const [modalClose, setModalClose] = useState(false);
  const handleModalClose = () => {
    setModalClose(true);
    onModalClose(modalClose);
  };

  const hiddenFileInput = createRef();

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <div className="modal__overlay" onClick={() => handleModalClose()} />
      <div className="img__upload__modal">
        <div className="img__upload__modal__inner">
          <div className="img__upload__modal__divider">
            <h3>프로필 사진 바꾸기</h3>
          </div>
          <div
            className="img__upload__modal__divider clickable"
            onClick={() => handleClick()}
          >
            <button>
              <h2 className="img__upload__modal__blue">사진 업로드</h2>
              <input
                type="file"
                onChange={e => onImgUpload(e)}
                ref={hiddenFileInput}
              />
            </button>
          </div>
          <div
            className="img__upload__modal__divider clickable"
            onClick={() => dispatch(deleteProfile(null))}
          >
            <button>
              <h2 className="img__upload__modal__red">현재 사진 삭제</h2>
            </button>
          </div>
          <div
            className="img__upload__modal__undo clickable"
            onClick={() => handleModalClose()}
          >
            <button>
              <span>취소</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ImgUploadModal;
