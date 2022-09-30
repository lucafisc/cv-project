import React, { createContext } from "react";
import { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
document.title = "CV Generator";
const root = ReactDOM.createRoot(document.getElementById("root"));
const ThemeContext = createContext();
root.render(
  <React.StrictMode>
    <ThemeContext.Provider value={"light"}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>
);
