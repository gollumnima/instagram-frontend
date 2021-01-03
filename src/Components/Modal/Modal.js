import React, { useState, useLayoutEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./modal.scss";
import ModalDetail from "./ModalDetail";

const Modal = props => {
  const { onModalClose } = props;
  const { location } = props;
  const { postNumber } = useParams();
  const history = useHistory();
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

  // const [postNumber, setPostNumber] = useState(null);
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
