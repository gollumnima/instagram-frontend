import React from "react";
import { Wrapper } from "Components/Wrapper/Wrapper";
import { Main } from "Pages/Main/Main"

export default {
  title: "Example/Wrapper",
  component: Wrapper
};

const Template = args => <Wrapper {...args} />;

export const Main = Template.bind({});
Main.args = {
  user: {}
};

// export const MyPage = Template.bind({});
// MyPage.args = {};
