import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const components = [
    "avatar",
    "alert",
    "badge",
    "button",
    "card",
    "heading",
    "text",
    "image",
  ];
  const handleSearch = () => {
    if (components.includes(searchInput.toLowerCase())) {
      navigate(`/${searchInput.toLowerCase()}`);
      setSearchInput("");
    } else {
      setSearchInput("");
      alert("Component not found");
    }
  };

  return (
    <header className="nav-bar">
      <h1 className="heading">My Component Library</h1>
      <div className="component-search-container">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="search components..."
          className="search-input"
        />

        <button
          className="search-btn"
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
      </div>
      <div className="nav-links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/components" className="link">
          Components
        </Link>
      </div>
    </header>
  );
};
