import React, { useLayoutEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ModalDetail from "./ModalDetail";
import "./modal.scss";

const Modal = ({ location }) => {
  const { postId } = useParams();
  const history = useHistory();
  const post = useSelector(state => state?.post?.post);
  const username = useSelector(state => state?.user?.userInfo?.username);
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

  const NavButton = ({ text, id }) => (
    // id &&
    <div
      className="modal__nav__btn"
      type="button"
      onClick={() => history.push(`/p/${id}`, { background: location })}
    >
      {text}
    </div>
  );

  return (
    <>
      <div
        className="modal__overlay"
        onClick={() => history.push(`/${username}`)}
      />
      <div className="modal__container">
        <div className="modal__inner">
          <div className="modal__detail__wrapper">
            <ModalDetail postId={postId} />
          </div>
          {/* <div className="modal__nav__wrapper">
            <NavButton history={history} id={state.next_id} text="<" />
            <NavButton history={history} id={state.next_id} text=">" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Modal;
