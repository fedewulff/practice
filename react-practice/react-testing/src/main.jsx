import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App, App2 } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <App2 />
  </StrictMode>
);
