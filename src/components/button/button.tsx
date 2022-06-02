import React from "react";
import "./button.scss";
import { ButtonBase, ButtonDefaults, ButtonPrefix, IntButton } from "../types";

const Button: React.FC<IntButton> = ({
  block = false,
  disabled = false,
  label,
  rounded = false,
  size = ButtonDefaults.Size,
  type = ButtonDefaults.Type
}) => {
  let className = `${ButtonBase} ${ButtonPrefix}${size} ${ButtonPrefix}${type}`;

  if (block) className += ` ${ButtonPrefix}block`;
  if (rounded) className += ` ${ButtonPrefix}rounded`;

  return (
    <button disabled={disabled} className={className}>
      {label}
    </button>
  );
};

export default Button;
