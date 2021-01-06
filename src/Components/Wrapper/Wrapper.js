import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "Components/Profile";
import "./wrapper.scss";
import AccountModal from "./AccountModal";

const Wrapper = props => {
  const user = useSelector(state => state.user);
  const [accountModal, setAccountModal] = useState(false);

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-inner">
          <div className="nav-left">
            <Link to="/">
              <img
                className="nav-left-words"
                src="/instalogo.png"
                alt="insta"
              ></img>
            </Link>
          </div>
          <div className="nav-mid">
            <input className="nav-input"></input>
            <div className="nav-mid-box">
              <div className="input-img-container">
                <img
                  className="search-icon"
                  src="http://www.clker.com/cliparts/w/r/Q/0/x/D/search-icon-light-grey-md.png"
                  alt="search-icon"
                ></img>
              </div>
              <span className="search-word">검색</span>
            </div>
          </div>
          <div className="nav-right">
            <svg
              className="nav-icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 306.773 306.773"
            >
              <g>
                <path
                  d="M302.93,149.794c5.561-6.116,5.024-15.49-1.199-20.932L164.63,8.898
		c-6.223-5.442-16.2-5.328-22.292,0.257L4.771,135.258c-6.092,5.585-6.391,14.947-0.662,20.902l3.449,3.592
		c5.722,5.955,14.971,6.665,20.645,1.581l10.281-9.207v134.792c0,8.27,6.701,14.965,14.965,14.965h53.624
		c8.264,0,14.965-6.695,14.965-14.965v-94.3h68.398v94.3c-0.119,8.264,5.794,14.959,14.058,14.959h56.828
		c8.264,0,14.965-6.695,14.965-14.965V154.024c0,0,2.84,2.488,6.343,5.567c3.497,3.073,10.842,0.609,16.403-5.513L302.93,149.794z"
                />
              </g>
            </svg>
            <svg
              className="nav-icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122.88 103.44"
            >
              <g>
                <path d="M69.49,102.77L49.8,84.04l-20.23,18.27c-0.45,0.49-1.09,0.79-1.8,0.79c-1.35,0-2.44-1.09-2.44-2.44V60.77L0.76,37.41 c-0.98-0.93-1.01-2.47-0.09-3.45c0.31-0.33,0.7-0.55,1.11-0.67l0,0l118-33.2c1.3-0.36,2.64,0.39,3.01,1.69 c0.19,0.66,0.08,1.34-0.24,1.89l-49.2,98.42c-0.6,1.2-2.06,1.69-3.26,1.09C69.86,103.07,69.66,102.93,69.49,102.77L69.49,102.77 L69.49,102.77z M46.26,80.68L30.21,65.42v29.76L46.26,80.68L46.26,80.68z M28.15,56.73l76.32-47.26L7.22,36.83L28.15,56.73 L28.15,56.73z M114.43,9.03L31.79,60.19l38.67,36.78L114.43,9.03L114.43,9.03z" />
              </g>
            </svg>
            <svg
              className="nav-icons"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 477.867 477.867"
            >
              <g>
                <path
                  d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933
			C477.726,107.033,370.834,0.141,238.933,0z M238.933,443.733c-113.108,0-204.8-91.692-204.8-204.8s91.692-204.8,204.8-204.8
			s204.8,91.692,204.8,204.8C443.611,351.991,351.991,443.611,238.933,443.733z"
                />
              </g>
              <g>
                <path
                  d="M355.138,115.063c-4.793-2.388-10.428-2.388-15.221,0h0L195.106,187.46c-3.31,1.653-5.993,4.336-7.646,7.646
			l-72.397,144.811c-4.203,8.437-0.771,18.683,7.665,22.886c4.793,2.388,10.428,2.388,15.221,0l144.811-72.397
			c3.31-1.653,5.993-4.336,7.646-7.646l72.397-144.811C367.006,129.513,363.575,119.267,355.138,115.063z M168.499,309.367
			l38.912-77.824l38.912,38.912L168.499,309.367z M270.455,246.323l-38.912-38.912l77.824-38.912L270.455,246.323z"
                />
              </g>
            </svg>
            <svg
              className="nav-icons"
              viewBox="0 -28 512.001 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0" />
            </svg>
            <div
              className="nav__pf__container"
              onClick={() => setAccountModal(!accountModal)}
            >
              <Profile url={user.userInfo?.image_url} size="25" />
              {accountModal && <AccountModal />}
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-guard" />
      {props.children}
      <footer>
        <span>소개</span>
        <span>블로그</span>
        <span>인기 계정</span>
        <span>© 2020 Instagram from Doori Kim</span>
      </footer>
    </>
  );
};

export default Wrapper;
