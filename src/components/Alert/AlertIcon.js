import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineWarning, AiOutlineInfoCircle } from "react-icons/ai";
import { MdDone } from "react-icons/md";

export const AlertIcon = ({ status }) => {
  const icon = (status) => {
    switch (status) {
      case "error":
        return <BiErrorCircle />;
      case "warning":
        return <AiOutlineWarning />;
      case "info":
        return <AiOutlineInfoCircle />;
      case "success":
        return <MdDone />;
      default:
        break;
    }
  };

  return <div>{icon(status)}</div>;
};
