import React from "react";
import "./Docstyles.css";
import { Sidebar } from "./sidebar/Sidebar";
import { Image } from "../components/Image/Image";

export const ImageDoc = () => {
  return (
    <div>
      <Sidebar />
      <div className="doc-layout">
        <h1 className="component-doc-heading">Image</h1>
        <p className="component-doc-description">
          Image component is used to display images
        </p>
        <div className="components-container">
          <h1 className="component-doc-heading">Responsive Image</h1>
          <Image
            src="https://via.placeholder.com/350x150"
            alt="random-img"
            width="350"
            height="150"
          />
          <h1 className="component-doc-heading">Rounded Image</h1>
          <Image
            src="https://picsum.photos/id/64/200/300"
            alt="random-img"
            width="150"
            height="150"
            rounded
          />
        </div>
      </div>
    </div>
  );
};
