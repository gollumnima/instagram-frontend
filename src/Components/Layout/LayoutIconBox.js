import { current } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { createLike, deleteLike } from "store/like";
import { getSaves } from "store/save";
import "./layout__icon__box.scss";

const LayoutIconBox = props => {
  const { post, likePost, unlikePost } = props;
  const dispatch = useDispatch();
  const userID = useSelector(state => state?.user?.userInfo?.id);
  const likes = post?.Likes ?? [];
  const hasLikedThisPost = !!likes.find(e => e.User.id === userID);
  const saves = useSelector(state => state?.save?.savedList);

  const handleHeart = () => {
    const action = hasLikedThisPost ? unlikePost : likePost;
    action();
  };

  return (
    <>
      <section className="layout__icon__box">
        <div className="layout__icon__box__left">
          {hasLikedThisPost ? (
            <svg
              className="layout__icon__box__icons"
              viewBox="0 -28 512.00001 512"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleHeart()}
            >
              <path
                d="m512 153.867188c0 43.292968-16.132812 82.941406-50.773438 124.734374-30.996093 37.398438-75.53125 75.355469-127.113281 119.308594-17.625 15.015625-37.597656 32.039063-58.320312 50.171875-5.429688 4.75-12.386719 7.386719-19.613281 7.429688h-.179688c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085938-40.625-35.089844-58.21875-50.085938l-.089843-.066406c-51.574219-43.957031-96.128907-81.921875-127.117188-119.320313-34.648438-41.792968-50.78125-81.441406-50.78125-124.734374 0-42.066407 14.425781-80.882813 40.617188-109.292969 26.507812-28.75 62.875-44.574219 102.414062-44.574219 29.558594 0 56.617188 9.335938 80.449219 27.761719 12.027343 9.304687 22.921875 20.679687 32.519531 33.964843l.179688-.238281c9.558593-13.183593 20.394531-24.480469 32.347656-33.726562 23.824218-18.425781 50.894531-27.761719 80.441406-27.761719 39.546875 0 75.914062 15.824219 102.414062 44.574219 26.191407 28.410156 40.617188 67.214843 40.617188 109.292969zm0 0"
                fill="#ff5e95"
              />
              <path
                d="m512 153.867188c0 43.292968-16.132812 82.941406-50.773438 124.734374-30.996093 37.398438-75.53125 75.355469-127.113281 119.308594-17.625 15.015625-37.597656 32.039063-58.320312 50.171875-5.429688 4.75-12.386719 7.386719-19.613281 7.429688v-394.023438c9.558593-13.183593 20.394531-24.480469 32.347656-33.726562 23.824218-18.425781 50.894531-27.761719 80.441406-27.761719 39.546875 0 75.914062 15.824219 102.414062 44.574219 26.191407 28.410156 40.617188 67.214843 40.617188 109.292969zm0 0"
                fill="#ff3980"
              />
            </svg>
          ) : (
            <svg
              className="layout__icon__box__icons"
              viewBox="0 -28 512.001 512"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleHeart()}
            >
              <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" />
            </svg>
          )}
          <svg
            className="layout__icon__box__icons"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007m0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007" />
          </svg>
          <svg
            className="layout__icon__box__icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 103.44"
          >
            <g>
              <path d="M69.49,102.77L49.8,84.04l-20.23,18.27c-0.45,0.49-1.09,0.79-1.8,0.79c-1.35,0-2.44-1.09-2.44-2.44V60.77L0.76,37.41 c-0.98-0.93-1.01-2.47-0.09-3.45c0.31-0.33,0.7-0.55,1.11-0.67l0,0l118-33.2c1.3-0.36,2.64,0.39,3.01,1.69 c0.19,0.66,0.08,1.34-0.24,1.89l-49.2,98.42c-0.6,1.2-2.06,1.69-3.26,1.09C69.86,103.07,69.66,102.93,69.49,102.77L69.49,102.77 L69.49,102.77z M46.26,80.68L30.21,65.42v29.76L46.26,80.68L46.26,80.68z M28.15,56.73l76.32-47.26L7.22,36.83L28.15,56.73 L28.15,56.73z M114.43,9.03L31.79,60.19l38.67,36.78L114.43,9.03L114.43,9.03z" />
            </g>
          </svg>
        </div>
        <div className="layout__icon__box__right">
          <svg
            className="layout__icon__box__icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            onClick={() => dispatch(getSaves(post))}
          >
            <path
              // save 리스트도 백앤드에 저장해놨다가 있으면 path에 fill을 btnBlue로 줄 수 있도록 className 주기
              d="M7 5v23l1.594-1.188L16 21.25l7.406 5.563L25 28V5H7zm2 2h14v17l-6.406-4.813L16 18.75l-.594.438L9 24V7z"
            />
          </svg>
        </div>
      </section>
      <section className="feed__likes">
        <span>좋아요 {likes.length}개</span>
      </section>
    </>
  );
};

export default LayoutIconBox;
