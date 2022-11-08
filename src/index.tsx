// Modules
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import { BrowserRouter } from "react-router-dom";
import App from "./app/app.component";

// Styles
import "./assets/sass/main.scss";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// React Mounting
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
