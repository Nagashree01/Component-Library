import React from "react";
import "./Components.css";
import { useNavigate } from "react-router-dom";

export const Components = () => {
  const navigate = useNavigate();
  return (
    <div className="components-page-layout">
      <div className="heading">All Components</div>
      <div className="all-components-section">
        <button
          onClick={() => {
            navigate("/avatar");
          }}
        >
          Avatar
        </button>
        <button
          onClick={() => {
            navigate("/alert");
          }}
        >
          Alert
        </button>
        <button
          onClick={() => {
            navigate("/badge");
          }}
        >
          Badge
        </button>
        <button
          onClick={() => {
            navigate("/button");
          }}
        >
          Button
        </button>
        <button
          onClick={() => {
            navigate("/heading");
          }}
        >
          Heading
        </button>
        <button
          onClick={() => {
            navigate("/card");
          }}
        >
          Card
        </button>
        <button
          onClick={() => {
            navigate("/text");
          }}
        >
          Text
        </button>
        <button
          onClick={() => {
            navigate("/image");
          }}
        >
          Image
        </button>
      </div>
    </div>
  );
};
