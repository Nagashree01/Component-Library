import React from "react";
import "./FloatingButton.css";

export const FloatingButton = ({ handler, children }) => {
  return (
    <button className="floating-btn" onClick={() => handler()}>
      {children}
    </button>
  );
};
