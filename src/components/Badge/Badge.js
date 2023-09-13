import React from "react";
import "./Badge.css";

export const Badge = ({ type, children }) => {
  return <span className={`badge badge-${type}`}>{children}</span>;
};
