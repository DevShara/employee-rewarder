import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Employees from "./components/Employees";
import VoteEmployee from "./components/VoteEmployee"
import './styles/styles.css'
import Header from "./components/Header";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store/store";

import Main from "./Main";



const App = () => {

    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }



const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/> );
