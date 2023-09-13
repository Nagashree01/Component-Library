import React from "react";
import "./Docstyles.css";
import { Sidebar } from "./sidebar/Sidebar";
import { CardWithBadge } from "../components/Card/CardWithBadge";
import { CardWithDismiss } from "../components/Card/CardWithDismiss";
import { CardWithTextOverlay } from "../components/Card/CardWithTextOverlay";
import { TextOnlyCard } from "../components/Card/TextOnlyCard";
import { CardWithShadow } from "../components/Card/CardWithShadow";
import { VerticalCard } from "../components/Card/VerticalCard";

export const CardDoc = () => {
  return (
    <div>
      <Sidebar />
      <div className="doc-layout">
        <h1 className="component-doc-heading">Cards</h1>
        <p className="component-doc-description">
          Card is a flexible component used to group and display content in a
          clear and concise format
        </p>
        <h1 className="component-doc-heading">Card with badge</h1>
        <div>
          <CardWithBadge badgeContent="New">
            <h1>Title</h1>
            <p>Contents of card with badge</p>
          </CardWithBadge>
        </div>
        <div className="component-code-container">
          <iframe
            title="card-with-badge-code"
            className="card-with-badge-component-code"
            src="https://carbon.now.sh/embed/G3FomaQ2ZxXyTNWgEIpP"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>

        {/* Card With Dismiss */}
        <h1 className="component-doc-heading">Card with dismiss</h1>
        <div>
          <CardWithDismiss>
            <h1>Title</h1>
            <p>Contents of card with dismiss button</p>
          </CardWithDismiss>
        </div>
        <div className="component-code-container">
          <iframe
            title="card-with-dismiss-code"
            className="card-with-dismiss-component-code"
            src="https://carbon.now.sh/embed/rKox44ow8G4Rnu3WjF2U"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        {/* card with overlay text */}
        <h1 className="component-doc-heading">Card with Text Overlay</h1>
        <div>
          <CardWithTextOverlay
            overlaytext="overlay text"
            imageSrc="https://picsum.photos/id/167/200/300"
            width="100%"
            alt="card image"
            height="300"
          />
        </div>
        <div className="component-code-container">
          <iframe
            title="card with overlay text"
            src="https://carbon.now.sh/embed/RoQ3DAcdOsVkTDtLm6VJ"
            className="card-with-overlay-text-component-code"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        {/* Card with text only */}
        <h1 className="component-doc-heading">Card with Text Overlay</h1>
        <div>
          <TextOnlyCard>This is a Text only card</TextOnlyCard>
        </div>
        <div className="component-code-container">
          <iframe
            title="card with text only"
            src="https://carbon.now.sh/embed/54M7eCauq7GBebvOJoA2"
            className="card-with-text-only-component-code"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        {/* vertical card */}
        <h1 className="component-doc-heading">Vertical Card</h1>
        <div>
          <VerticalCard>
            <img src="https://picsum.photos/id/152/200/300" alt="flower" />
            <h2>Card Heading</h2>
            <p>Card contents...</p>
          </VerticalCard>
        </div>
        <div className="component-code-container">
          <iframe
            title="verticle-card-component-code"
            src="https://carbon.now.sh/embed/MZFpwlP6fjFeR7z6NuUG"
            className="verticle-card-component-code"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
        {/* shadow card */}
        <h1 className="component-doc-heading">Card With shadow</h1>
        <div>
          <CardWithShadow>
            <p>Card with shadow</p>
          </CardWithShadow>
        </div>
        <div className="component-code-container">
          <iframe
            title="card with shadow code"
            src="https://carbon.now.sh/embed/uQGmD7jUqoTVyMhR0pVp"
            className="verticle-card-component-code"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
