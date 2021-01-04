import React, { useState, useLayoutEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalDetail from "./ModalDetail";
import "./modal.scss";

const Modal = props => {
  const { onModalClose, postNumber, location } = props;
  const history = useHistory();
  const post = useSelector(state => state?.post?.post);
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
      <div className="modal-overlay" onClick={() => handleModalClose()} />
      <div className="modal-container">
        {/* <div className="modal-inner-wrapper">{props.children}</div> */}
        <div className="modal-inner-wrapper">
          <NavButton history={history} id={state.next_id}>{`<`}</NavButton>
          <ModalDetail postID={postNumber} />
          <NavButton history={history} id={state.next_id}>{`>`}</NavButton>
        </div>
      </div>
    </>
  );
};

export default Modal;
