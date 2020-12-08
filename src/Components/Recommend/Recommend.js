import React, { useState, useEffect } from "react";
import Story from "../Story";

const Recommend = () => {
  return (
    <div className="recommend-container">
      <div className="recommend-words-container">
        <span className="recommend-left">회원님을 위한 추천</span>
        <span className="recommend-right">모두보기</span>
      </div>
      <div>
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    </div>
  );
};

export default Recommend;
