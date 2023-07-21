import React from "react";
import "../../scss/styles.scss";
import { AlertBase, AlertDefaults, AlertPrefix, IntAlert } from "../types";

const Well: React.FC<IntAlert> = ({
  children,
  size = AlertDefaults.Size,
  type = AlertDefaults.Type
}) => {
  let className = `${AlertBase} ${AlertPrefix}${size} ${AlertPrefix}${type}`;

  return <div className={className}>{children}</div>;
};

export default Well;
