import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Alert from "./alert";
import { PaperClasses, PaperSizes } from "../types";

export default {
  title: "Paper/Alerts",
  component: Alert,
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
      options: ["primary", "secondary", "success", "danger", "warning", "info"]
    }
  }
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "wth what the hell",
  size: PaperSizes.Small,
  type: PaperClasses.Primary
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "wth what the hell",
  size: PaperSizes.Small,
  type: PaperClasses.Secondary
};

export const Success = Template.bind({});
Success.args = {
  children: "wth what the hell",
  size: PaperSizes.Small,
  type: PaperClasses.Success
};
