import React from "react";
import { Main } from "Pages/Main/Main";

export default {
  title: "Example/Main",
  component: Main
};

const Template = args => <Main {...args} />;

export const mainPage = () => <Main />;
