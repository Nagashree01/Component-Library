import React from "react";
import "./Docstyles.css";
import { Sidebar } from "./sidebar/Sidebar";
import { Heading } from "../components/Heading/Heading";

export const HeadingDoc = () => {
  return (
    <div>
      <Sidebar />
      <div className="doc-layout">
        <h1 className="component-doc-heading">Heading</h1>
        <p className="component-doc-description">
          Headings are used to render semantic HTML heading elements.
        </p>
        <div className="components-container">
          <Heading size="4xl">(4xl)In love with react and typescript</Heading>
          <Heading size="3xl">(3xl)In love with react and typescript</Heading>
          <Heading size="2xl">(2xl)In love with react and typescript</Heading>
          <Heading size="xl">(xl)In love with react and typescript</Heading>
          <Heading size="lg">(lg)In love with react and typescript</Heading>
          <Heading size="md">(md)In love with react and typescript</Heading>
          <Heading size="sm">(sm)In love with react and typescript</Heading>
          <Heading size="xs">(xs)In love with react and typescript</Heading>
        </div>
        <div className="component-code-container">
          <iframe
            className="heading-component-code"
            title="heading"
            src="https://carbon.now.sh/embed/kvxk0ilTz1Pwvr1e4bCJ"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
