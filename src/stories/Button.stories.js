import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button
};

const Template = args => <Button {...args} />;

// Each story then reuses that template
// export const Primary = Template.bind({});

// Primary.args = {
//   primary: true,
//   label: "Button"
// };

export const Primary = () => <Button background="#ff0" label="버튼이당" />;
export const Secondary = () => <Button background="#ff0" label="😄👍😍💯" />;
export const Tertiary = () => <Button background="#ff0" label="📚📕📈🤓" />;
