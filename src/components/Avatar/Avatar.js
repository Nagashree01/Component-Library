import React from "react";
import "./Avatar.css";

export const Avatar = (props) => {
  const { size, alt, src } = props;
  return (
    <div>
      <img className={`avatar avatar-${size}`} src={src} alt={alt} />{" "}
    </div>
  );
};
