import Button from "./button.html.twig";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Components/Button",
  tags: ["autodocs"],
  component: Button,
};

// More on writing stories with args:
// https://storybook.js.org/docs/writing-stories/args
export const Default = {};

export const Secondary = {
  args: {
    variant: "secondary",
  },
};

export const AccentCool = {
  args: {
    variant: "accent-cool",
  },
};

export const Outline = {
  args: {
    variant: "outline",
  },
};
