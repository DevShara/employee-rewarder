import React from "react";
import { createRoot } from "react-dom/client";
import Employees from "./components/Employees";
import './styles/styles.css'
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Employees />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
