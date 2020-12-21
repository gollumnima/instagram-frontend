import React, { useState, useLayoutEffect } from "react";
import "./modal.scss";

const Modal = props => {
  const { onModalClose } = props;
  const useLockBodyScroll = () => {
    useLayoutEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = originalStyle);
    }, []);
  };

  const [modalClose, setModalClose] = useState(false);
  const handleModalClose = () => {
    setModalClose(true);
    onModalClose(modalClose);
  };
  useLockBodyScroll();

  return (
    <>
      <div className="modal-overlay" onClick={() => handleModalClose()} />
      <div className="modal-container">
        <div className="modal-inner-wrapper">{props.children}</div>
      </div>
    </>
  );
};

export default Modal;
