import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-links">
        <li>
          <NavLink to="/avatar">Avatar</NavLink>
        </li>
        <li>
          <NavLink to="/alert">Alert</NavLink>
        </li>
        <li>
          <NavLink to="/badge">Badge</NavLink>
        </li>
        <li>
          <NavLink to="/button">Button</NavLink>
        </li>
        <li>
          <NavLink to="/card">Card</NavLink>
        </li>
        <li>
          <NavLink to="/heading">Heading</NavLink>
        </li>
        <li>
          <NavLink to="/text">Text</NavLink>
        </li>
        <li>
          <NavLink to="/image">Image</NavLink>
        </li>
      </ul>
    </nav>
  );
};
