import React from "react";
import "./TextOnlyCard.css";

export const TextOnlyCard = ({ children }) => {
  return <p className="text-only-card-container">{children}</p>;
};
