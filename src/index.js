import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";
import { HabitContext, HabitProvider } from "./Context/HabitProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HabitProvider>
      <Router>
        <App />
      </Router>
    </HabitProvider>
  </React.StrictMode>
);

export { HabitContext };
