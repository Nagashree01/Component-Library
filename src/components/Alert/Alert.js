import React from "react";
import "./Alert.css";

export const Alert = ({ status, children }) => {
  return <div className={`alert ${status}`}>{children}</div>;
};
