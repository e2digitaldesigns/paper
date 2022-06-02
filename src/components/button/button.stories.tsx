import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./button";
import { PaperClasses, PaperSizes } from "../types";

export default {
  title: "Paper/Buttons",
  component: Button,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
      mapping: ["xs", "sm", "md", "lg"],
      labels: {
        sm: "small",
        md: "Medium",
        lg: "Large"
      }
    },
    type: {
      control: { type: "select" },
      options: [
        "primary-btn",
        "secondary-btn",
        "success-btn",
        "danger-btn",
        "warning-btn",
        "info-btn"
      ]
    },

    rounded: { control: "boolean" },

    disabled: { control: "boolean" },

    block: { control: "boolean" }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  label: "Primary Button",
  size: PaperSizes.Small,
  type: PaperClasses.Primary,
  rounded: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: false,
  label: "Secondary Button",
  size: PaperSizes.Small,
  type: PaperClasses.Secondary,
  rounded: true
};

export const Success = Template.bind({});
Success.args = {
  disabled: false,
  label: "Success Button",
  size: PaperSizes.Small,
  type: PaperClasses.Success,
  rounded: true
};
