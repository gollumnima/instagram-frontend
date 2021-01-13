import React, { useLayoutEffect, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ModalDetail from "./ModalDetail";
import { findUser } from "store/user";
import "./modal.scss";

const Modal = ({ location }) => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const history = useHistory();
  const post = useSelector(state => state?.post?.post);
  const linkedName = location.pathname.slice(1);
  const foundUser = useSelector(
    state => state?.user?.foundUser?.username ?? null
  );

  const useLockBodyScroll = () => {
    useLayoutEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = originalStyle);
    }, []);
  };

  useEffect(() => {
    dispatch(findUser(linkedName));
  }, []);

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

  console.log(foundUser);
  return (
    <>
      <div
        className="modal__overlay"
        onClick={() => history.push(`/${foundUser}`)}
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
