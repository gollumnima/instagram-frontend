import React, { useState, useEffect } from "react";
import Profile from "Components/Profile";
import dummyApi from "utils/dummyApi";
import classNames from "classnames/bind";
import css from "./layout.scss";

const cn = classNames.bind(css);

const Layout = props => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    dummyApi().then(data => {
      setUserList(data);
    });
  }, []);

  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [heart, setHeart] = useState(false);

  const handleChange = e => {
    const commentValue = e.target.value;
    setComment(commentValue);
  };

  const handleSubmit = () => {
    setCommentList(commentList.concat(comment));
  };

  const handleEnter = e => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleHeart = () => {
    setHeart(!heart);
  };

  console.log(commentList, "li");
  return (
    <div className="layout-container">
      <header>
        <div className="layout-pf-container">
          <Profile
            url="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/125803772_1165915217177196_1415869914155524541_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=vaag0qgslDgAX9gbJ37&tp=1&oh=d0361b58ee6dc19984ba4f418f32e3a8&oe=5FEF30DE"
            id="dooreplay"
            size="32"
          />
        </div>
        <div className="feed-dots-container">
          <img
            className="feed-dots"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
            alt="dots"
          ></img>
        </div>
      </header>
      <div className="feed-img-container">
        <img
          className="feed-uploaded-img"
          src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/120288681_808150636668713_1917941423406171055_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=FSX0lotSjFkAX97Onb9&tp=1&oh=7388996391d84f379d7297138f4e06e7&oe=5FEF3658"
          alt="feed-uploaded-img"
        ></img>
      </div>
      <div className="comment-container">
        <section className="comment-img-container">
          <div className="comment-left">
            {!heart ? (
              <svg
                className="comment-heart comment-icons"
                viewBox="0 -28 512.001 512"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleHeart}
              >
                <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" />
              </svg>
            ) : (
              <svg
                className="comment-heart comment-icons"
                viewBox="0 -28 512.00001 512"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleHeart}
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
            )}
            <svg
              className="comment-balloon comment-icons"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007m0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007" />
            </svg>
            <svg
              className="comment-share comment-icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 103.44"
            >
              <g>
                <path d="M69.49,102.77L49.8,84.04l-20.23,18.27c-0.45,0.49-1.09,0.79-1.8,0.79c-1.35,0-2.44-1.09-2.44-2.44V60.77L0.76,37.41 c-0.98-0.93-1.01-2.47-0.09-3.45c0.31-0.33,0.7-0.55,1.11-0.67l0,0l118-33.2c1.3-0.36,2.64,0.39,3.01,1.69 c0.19,0.66,0.08,1.34-0.24,1.89l-49.2,98.42c-0.6,1.2-2.06,1.69-3.26,1.09C69.86,103.07,69.66,102.93,69.49,102.77L69.49,102.77 L69.49,102.77z M46.26,80.68L30.21,65.42v29.76L46.26,80.68L46.26,80.68z M28.15,56.73l76.32-47.26L7.22,36.83L28.15,56.73 L28.15,56.73z M114.43,9.03L31.79,60.19l38.67,36.78L114.43,9.03L114.43,9.03z" />
              </g>
            </svg>
          </div>
          <div className="comment-right">
            <svg
              className="comment-bookmark comment-icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M7 5v23l1.594-1.188L16 21.25l7.406 5.563L25 28V5H7zm2 2h14v17l-6.406-4.813L16 18.75l-.594.438L9 24V7z" />
            </svg>
          </div>
        </section>
        <section className="feed-likes-container">
          <span className="comment-id">좋아요 500개</span>
        </section>
        <section className="feed-words-container">
          <div className="feed-yours">
            <span>
              <b className="comment-id">{props.username}</b> {props.desc}
            </span>
          </div>
          <div className="comment-box">
            {commentList.length > 1 && (
              <span className="comment-all">
                댓글 {commentList.length}개 모두보기
              </span>
            )}
            {/* <span className="comment-id">ain-nuna</span>
              <span>아이니 너무 귀엽다 오구오구</span> */}
            {commentList.map(el => (
              <div className="comment-group">
                <span className="comment-id">dooreplay</span>
                <span>{el}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="comment-input-container">
          <div className="comment-input-box">
            <input
              placeholder="댓글달기..."
              onChange={e => handleChange(e)}
              onKeyPress={e => handleEnter(e)}
            ></input>
            <button className="comment-btn" onClick={handleSubmit}>
              <span className={cn(comment ? "active-btn" : "deactive-btn")}>
                게시
              </span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Layout;
