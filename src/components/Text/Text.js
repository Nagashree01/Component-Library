import React from "react";
import "./Text.css";

export const Text = ({ size, children }) => {
  return <div className={` texts text-${size}`}>{children}</div>;
};
