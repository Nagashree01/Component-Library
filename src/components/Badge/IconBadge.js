import React from "react";
import "./IconBadge.css";

export const IconBadge = ({ content, children }) => {
  return (
    <span className={`icon-badge-container`}>
      <span className="icon-badge">{children}</span>
      <span className="icon-badge-content">{content}</span>
    </span>
  );
};
