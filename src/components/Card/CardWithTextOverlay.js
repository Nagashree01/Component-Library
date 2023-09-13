import React from "react";
import "./CardWithTextOverlay.css";

export const CardWithTextOverlay = ({
  overlaytext,
  imageSrc,
  width,
  alt,
  height,
}) => {
  return (
    <div className="card-with-text-overlay-container">
      <img src={imageSrc} width={width} height={height} alt={alt} />
      <span className="overlay-text">{overlaytext}</span>
    </div>
  );
};
