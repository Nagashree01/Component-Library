import React from "react";
import { Sidebar } from "./sidebar/Sidebar";
import "./Docstyles.css";
import { Alert } from "../components/Alert/Alert";
import { AlertIcon } from "../components/Alert/AlertIcon";

export const AlertDoc = () => {
  return (
    <div>
      <Sidebar />
      <div className="doc-layout">
        <h1 className="component-doc-heading">Alert</h1>
        <p className="component-doc-description">
          Alert displays a short important message. It attracts users attention
          without interrupting users attention. There are 5 types of alert
          namely primary alert, information alert, success alert, warning alert
          and error or danger alert.
        </p>
        <div className="components-container">
          <Alert status="error">
            <AlertIcon status="error" />
            This is an error alert
          </Alert>
          <Alert status="success">
            <AlertIcon status="success" />
            This is a success alert
          </Alert>
          <Alert status="warning">
            <AlertIcon status="warning" />
            This is a warning alert
          </Alert>
          <Alert status="info">
            <AlertIcon status="info" />
            This is an info alert
          </Alert>
        </div>
        <div className="component-code-container">
          <iframe
            className="alert-component-code"
            title="alert-component-code"
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=794.75&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=18px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CAlert%2520status%253D%2522error%2522%253E%250A%2520%2520%2520%253CAlertIcon%2520status%253D%2522error%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520This%2520is%2520an%2520error%2520alert%250A%2520%253C%252FAlert%253E%250A%253CAlert%2520status%253D%2522success%2522%253E%250A%2520%2520%2520%253CAlertIcon%2520status%253D%2522success%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520This%2520is%2520an%2520success%2520alert%250A%253C%252FAlert%253E%250A%253CAlert%2520status%253D%2522warning%2522%253E%250A%2520%2520%2520%253CAlertIcon%2520status%253D%2522warning%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520This%2520is%2520an%2520warning%2520alert%250A%253C%252FAlert%253E%250A%253CAlert%2520status%253D%2522info%2522%253E%250A%2520%2520%2520%2520%253CAlertIcon%2520status%253D%2522info%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520This%2520is%2520an%2520info%2520alert%250A%253C%252FAlert%253E%250A"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
