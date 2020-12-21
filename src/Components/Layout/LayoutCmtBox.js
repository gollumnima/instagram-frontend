import React from "react";
import LayoutContent from "./LayoutContent";
import "./layout__cmt__box.scss";

const LayoutCmtBox = props => {
  return (
    <div className="comment__box" style={{ width: `${props.size}px` }}>
      <section className="comment__box__feed">
        <div className="comment__box__feed__yours">
          <LayoutContent desc="#조랭이떡 아이니 귀여워" username="dooreplay" />
        </div>
        <div className="comment__box__wrapper">
          {props.commentList ? (
            <span className="comment__box__all">
              댓글 {props.commentList.length ?? 0}개 모두보기
            </span>
          ) : (
            <></>
          )}

          <span className="comment__box__nickname">ain-nuna</span>
          <span>아이니 너무 귀엽다 오구오구</span>
          {props.commentList?.map(el => (
            <div className="comment__box__group">
              <span className="comment__box__nickname">{props.username}</span>
              <span>{el}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LayoutCmtBox;
