import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";

function App() {
  return (
    <div className={`appContainer`}>
      <ToastContainer />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
