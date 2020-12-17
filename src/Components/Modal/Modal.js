import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import "./modal.scss";

const Modal = props => {
  const useLockBodyScroll = () => {
    useLayoutEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = originalStyle);
    }, []);
  };

  useLockBodyScroll();
  return (
    <>
      <div className="modal-overlay" />
      <div className="modal-container">
        <div className="modal-inner-wrapper">{props.children}</div>
      </div>
    </>
  );
};

export default Modal;
