import React from "react";
import PropTypes from "prop-types";

const Hello = ({ name, big, onHello, onBye }) => {
  return (
    <div>
      {big ? <h1>안녕하세요, {name} !</h1> : <p>안녕하세요, {name}</p>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </div>
  );
};

// TS 혹은 propTypes를 써줘야 해서 TS를 쓰시는구나!!
// 아래처럼 주석을 남기면 문구가 나중에 문서에 나타남! 신기쓰

Hello.propTypes = {
  /** 보여주고 싶은 이름 */
  name: PropTypes.string.isRequired,
  /** 이 값을 `true` 로 설정하면 h1 태그로 렌더링 됩니다. */
  big: PropTypes.bool,
  /** Hello 버튼 누를 때 호출할 함수 */
  onHello: PropTypes.func,
  /** Hello 버튼 누를 때 호출할 함수 */
  onBye: PropTypes.func
};

Hello.defaultProps = {
  big: false
};

export default Hello;
