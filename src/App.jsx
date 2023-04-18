import React from "react";
import { createRoot } from "react-dom/client";
import Employees from "./components/Employees";
import VoteEmployee from "./components/VoteEmployee"
import './styles/styles.css'
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./store/store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Employees />}></Route>
          <Route path="vote" element={<VoteEmployee />}></Route>
        </Routes>
        
      </BrowserRouter>
    </Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
