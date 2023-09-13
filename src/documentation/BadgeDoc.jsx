import React from "react";
import "./Docstyles.css";
import { Sidebar } from "./sidebar/Sidebar";
import { Badge } from "../components/Badge/Badge";
import { IconBadge } from "../components/Badge/IconBadge";
import { BiMessageAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

export const BadgeDoc = () => {
  return (
    <div>
      <Sidebar />
      <div className="doc-layout">
        <h1 className="component-doc-heading">Badges</h1>
        <p className="component-doc-description">
          Badges are small status descriptors for UI elements. A badge consists
          of a small circle, typically containing a number or other short set of
          characters, that appears in proximity to another object.Used to
          display short informations
        </p>
        <div>
          <Badge type="default">DEFAULT</Badge>
          <Badge type="error">ERROR</Badge>
          <Badge type="success">SUCCESS</Badge>
          <Badge type="new">NEW</Badge>
        </div>
        <div className="component-code-container">
          <iframe
            title="badge-code"
            className="badge-component-code"
            src="https://carbon.now.sh/embed/D75f7lQR5OjMmxVzdRkH"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        <h1 className="component-doc-heading">Icon Badges</h1>
        <div>
          <IconBadge content="3">
            <BiMessageAlt />
          </IconBadge>
        </div>
        <div>
          <IconBadge content="23">
            <AiOutlineMail />
          </IconBadge>
        </div>
        <div>
          <iframe
            title="icon-badge-code"
            src="https://carbon.now.sh/embed/B58dm36fDUswFwThQVHA"
            className="icon-badge-component-code"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
