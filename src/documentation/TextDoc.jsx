import React from "react";
import "./Docstyles.css";
import { Sidebar } from "./sidebar/Sidebar";
import { Text } from "../components/Text/Text";

export const TextDoc = () => {
  return (
    <div>
      <Sidebar />
      <div className="doc-layout">
        <h1 className="component-doc-heading">Texts</h1>
        <p className="component-doc-description">
          Texts are used to render texts in paragraphs
        </p>
        <div className="components-container">
          <Text size="6xl">In love with react and typescript</Text>
          <Text size="5xl">In love with react and typescript</Text>
          <Text size="4xl">In love with react and typescript</Text>
          <Text size="3xl">In love with react and typescript</Text>
          <Text size="2xl">In love with react and typescript</Text>
          <Text size="xl">In love with react and typescript</Text>
          <Text size="lg">In love with react and typescript</Text>
          <Text size="md">In love with react and typescript</Text>
          <Text size="sm">In love with react and typescript</Text>
          <Text size="xs">In love with react and typescript</Text>
        </div>
        <div className="component-code-container">
          <iframe
            className="text-component-code"
            title="text-code"
            src="https://carbon.now.sh/embed/VlR0HvdfF4TmYkCZ7Akv"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
