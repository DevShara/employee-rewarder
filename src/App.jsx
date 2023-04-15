import React from "react";
import { createRoot } from "react-dom/client";
import Employees from "./components/Employees";

const App = () => {
  return (
    <>
      <Employees />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
