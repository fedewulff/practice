import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Greeting, MonthList, App2, List, List2, List3, AppButton, Person, Clock } from "../Greeting.jsx";
import { FunctionalInput, ClassInput } from "./class.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <MonthList />
    <App2 />
    <List />
    <List2 />
    <List3 />
    <AppButton />
    <Person />
    <Clock />
    <FunctionalInput />
    <ClassInput />
  </StrictMode>
);
