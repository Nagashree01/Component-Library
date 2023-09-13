import React from "react";
import "./Docstyles.css";
import { Sidebar } from "./sidebar/Sidebar";
import { Avatar } from "../components/Avatar/Avatar";

export const AvatarDoc = () => {
  return (
    <div>
      <Sidebar />

      <div className="doc-layout">
        <h1 className="component-doc-heading">Avatar</h1>
        <p className="component-doc-description">
          Avatar is typically used for displaying user profile. Usually in
          circular shapes. It can be user's image .
        </p>
        <div className="avatar-component-container">
          <Avatar
            size="sm"
            alt="user 1"
            src="https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736667/avatar6_eke8go.jpg"
          />
          <Avatar
            size="md"
            alt="user 2"
            src="https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736667/avatar6_eke8go.jpg"
          />
          <Avatar
            size="lg"
            alt="user 3"
            src="https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736667/avatar6_eke8go.jpg"
          />
        </div>
        <p className="component-doc-description">
          Avatar available sizes are small,medium,large
        </p>
        <div className="component-code-container">
          <iframe
            className="avatar-component-code"
            title="avatar"
            src="https://carbon.now.sh/embed/r1JYRMxQIz6Ya7XVs1nD"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
