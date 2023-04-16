import React from "react";
import { createRoot } from "react-dom/client";
import Employees from "./components/Employees";
import './styles/styles.css'
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Employees />
    </Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
