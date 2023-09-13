import React, { useState } from "react";
import "./CardWithDismiss.css";

export const CardWithDismiss = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      {isOpen && (
        <div className="card-with-dismis-container">
          <span className="close" onClick={() => setIsOpen(false)}>
            &times;
          </span>
          {children}
        </div>
      )}
    </div>
  );
};
