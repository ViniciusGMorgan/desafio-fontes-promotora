import React from "react";

import "./CardStyle.css";

export default function CardLogin({ children }) {
  return (
    <div className="cardPage">
      <div className="cardContainer">{children}</div>
    </div>
  );
}
