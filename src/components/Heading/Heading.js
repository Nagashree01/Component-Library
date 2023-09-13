import React from "react";
import "./Heading.css";

export const Heading = ({ size, children }) => {
  return <div className={` heading heading-${size}`}>{children}</div>;
};
