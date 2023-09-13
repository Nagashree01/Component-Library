import React from "react";
import "./CardWithBadge.css";

export const CardWithBadge = ({ badgeContent, children }) => {
  return (
    <div className="card-with-badge-container">
      <div className="badge-container">
        <span className="badge">{badgeContent}</span>
      </div>
      {children}
    </div>
  );
};
