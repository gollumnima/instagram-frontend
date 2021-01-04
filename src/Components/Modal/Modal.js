import React, { useState, useLayoutEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalDetail from "./ModalDetail";
import "./modal.scss";

const Modal = ({ location }) => {
  const { postId } = useParams();
  const history = useHistory();

  //  const { onModalClose, postNumber, location } = props;
  const post = useSelector(state => state?.post?.post);
  const useLockBodyScroll = () => {
    useLayoutEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = originalStyle);
    }, []);
  };

  const [state, setState] = React.useReducer(
    (prev, next) => ({ ...prev, ...next }),
    {
      prev_id: null,
      next_id: null
    }
  );

  useLockBodyScroll();

  const NavButton = ({ text, id }) =>
    id && (
      <div
        type="button"
        onClick={() => history.push(`/p/${id}`, { background: location })}
      >
        {text}
      </div>
    );

  return (
    <>
      <div className="modal-overlay" onClick={() => history.push("/myPage")} />
      <div className="modal-container">
        <div className="modal-inner-wrapper">
          <NavButton history={history} id={state.next_id}>{`<`}</NavButton>
          <ModalDetail postId={postId} />
          <NavButton history={history} id={state.next_id}>{`>`}</NavButton>
        </div>
      </div>
    </>
  );
};

export default Modal;
