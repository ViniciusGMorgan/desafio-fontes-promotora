import React from "react";

import "./CardStyle.css";

export default function cardRegister({ children }) {
  return (
    <div className="cardPageRegister">
      <div className="cardContainerRegister">{children}</div>
    </div>
  );
}
