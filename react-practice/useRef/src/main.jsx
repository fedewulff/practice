import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { UseRefTimer, RefExample, Counter } from "./useRefTimer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseRefTimer />
    <RefExample />
    <Counter />
  </StrictMode>
);
