import React from "react";
import "./IconButton.css";
import { AiFillEdit, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

export const IconButton = ({ iconBtnType, handler }) => {
  const icon = (icon) => {
    switch (icon) {
      case "Add":
        return <AiOutlinePlus />;
      case "Edit":
        return <AiFillEdit />;
      case "Delete":
        return <AiOutlineDelete />;
      default:
        break;
    }
  };
  return (
    <button
      className={`icon-btn icon-${iconBtnType}`}
      onClick={() => handler()}
    >
      <span>{icon(iconBtnType)}</span>
      {iconBtnType}
    </button>
  );
};
