import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TodoListUseReduce, TodoListUseState } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoListUseReduce />
    <TodoListUseState />
  </StrictMode>
);
