import React from "react";
import "./Image.css";

export const Image = (props) => {
  const { src, alt, height, width, rounded } = props;
  return (
    <div>
      <img
        src={src}
        alt={alt}
        height={height}
        width={width}
        className={`${rounded ? "rounded-img" : ""}`}
      />
    </div>
  );
};
