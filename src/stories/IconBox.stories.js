import React from "react";
import LayoutIconBox from "Components/Layout/LayoutIconBox";
import { withKnobs, text, array } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Example/LayoutIconBox", // 스토리북에서 보여질 그룹과 경로를 명시
  component: LayoutIconBox, // 어떤 컴포넌트를 문서화 할지 명시
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "Layout 조각 중 icon들을 포함한 컴포넌트"
  }
};

export const layoutIcon = () => {
  //knobs 만들기
  const post = array([]);
  const likePost = array([]);
  const unlikePost = array([]);
  return (
    <LayoutIconBox post={post} likePost={likePost} unlikePost={unlikePost} />
  );
};

// layoutIcon.story = {
//   name: "Default"
// };

export const emptyHeart = () => <LayoutIconBox />;
export const fullHearted = () => <LayoutIconBox />;

// react-redux를 Provider로 감싸야 함... 나중에 다시...!
