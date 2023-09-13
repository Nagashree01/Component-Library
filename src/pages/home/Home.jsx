import React from "react";
import "./Home.css";
import { useNavigate, Link } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="primary-heading">Magic UI</div>
      <div className="secondary-heading">
        A collection of innovative components for modern web development.
      </div>
      <div className="home-btn">
        <button onClick={() => navigate("/components")}>Get Started</button>
        <a
          className="externale-link"
          href="https://github.com/Nagashree01/component-library"
          target="_blank"
          rel="noreferrer noopener"
        >
          Github
        </a>
      </div>
    </div>
  );
};
