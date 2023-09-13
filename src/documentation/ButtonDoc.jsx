import React from "react";
import "./Docstyles.css";
import { Sidebar } from "./sidebar/Sidebar";
import { Button } from "../components/Button/Button";
import { FloatingButton } from "../components/Button/FloatingButton";
import { AiOutlinePlus, AiFillEdit } from "react-icons/ai";
import { IconButton } from "../components/Button/IconButton";

export const ButtonDoc = () => {
  return (
    <div>
      <Sidebar />
      <div className="doc-layout">
        <h1 className="component-doc-heading">Buttons</h1>
        <p className="component-doc-description">
          Buttons allow users to take actions, and make choices, with a single
          tap.
        </p>
        <div>
          <Button
            type="primary-btn"
            content="Primary Button"
            handler={() => {
              alert("primary button action");
            }}
          />
          <Button
            type="secondary-btn"
            content="Secondary Button"
            handler={() => {
              alert("secondary button action");
            }}
          />
          <Button type="link-btn" content="Link Button" to="/" />
        </div>
        <div className="component-code-container">
          <iframe
            title="button-code"
            className="button-component-code"
            src="https://carbon.now.sh/embed/Gf6PIN6zrzV1VX1PtEW3"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>

        {/* Icon Buttons */}
        <h1 className="component-doc-heading">Icon Buttons</h1>
        <p className="component-doc-description">
          Icon button component combtine icons with text for action
        </p>
        <div>
          <IconButton
            iconBtnType="Add"
            handler={() => alert("Add button actions")}
          />
          <IconButton
            iconBtnType="Edit"
            handler={() => alert("Edit button actions")}
          />
          <IconButton
            iconBtnType="Delete"
            handler={() => alert("Delete button actions")}
          />
        </div>
        <div className="component-code-container">
          <iframe
            title="icon-button-code"
            className="icon-button-component-code"
            src="https://carbon.now.sh/embed/upnnNIVv72eNxtXWJx0B"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>

        {/* Floating Action Buttons */}
        <h1 className="component-doc-heading">Floating Action Buttons</h1>
        <p className="component-doc-description">
          Floating action buttons provide quick actions for user interaction
        </p>
        <div>
          <FloatingButton
            handler={() => {
              alert("floating button handler");
            }}
          >
            <AiOutlinePlus />
          </FloatingButton>
          <FloatingButton
            handler={() => {
              alert("floating button handler");
            }}
          >
            <AiFillEdit />
          </FloatingButton>
        </div>
        <div className="component-code-container">
          <iframe
            title="floating-btn-code"
            className="floating-badge-component-code"
            src="https://carbon.now.sh/embed/Er6R4DxeWPXgU5C2okTW"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
