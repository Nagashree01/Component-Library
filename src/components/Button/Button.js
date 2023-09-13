import React from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

export const Button = ({ type, content, handler, to }) => {
  const navigate = useNavigate();
  return type === "link-btn" ? (
    <button
      className={`button ${type}`}
      onClick={() => {
        navigate(to);
      }}
    >
      {content}
    </button>
  ) : (
    <button className={`button ${type}`} onClick={() => handler()}>
      {content}
    </button>
  );
};
