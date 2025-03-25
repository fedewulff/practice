import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Image, Pokemon } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Image />
    <Pokemon />
  </StrictMode>
);
