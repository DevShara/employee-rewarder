import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Employees from "./components/Employees";
import VoteEmployee from "./components/VoteEmployee"
import './styles/styles.css'
import Header from "./components/Header";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./store/store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import netlifyIdentity from 'netlify-identity-widget';
import { login, logout } from "./store/actions";


netlifyIdentity.init({
  container: '#netlify-modal', // defaults to document.body
  locale: 'en' // defaults to 'en'
});

const Main = () => {
  const [isLogin, setIsLogin] = useState(netlifyIdentity.currentUser() != null) 
  console.log(isLogin)
  const dispatch = useDispatch();
 
    netlifyIdentity.on('login', user => {
      setIsLogin(true);
      netlifyIdentity.close();

    });

    netlifyIdentity.on('logout', () => {
      setIsLogin(false)
    });


  if(isLogin){
      return (
        <div>
        
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Employees />}></Route>
              <Route path="vote" element={<VoteEmployee />}></Route>
            </Routes>
            
          </BrowserRouter>
          </div>
      );
      
  }else{
    netlifyIdentity.open(); // open the modal

    return(   
      <div className="flex flex-col justify-center items-center h-screen gap-6">
        <h1 className="font-semibold text-2xl">Welcome to Employee Rewarder</h1>
        <button className=" bg-gray-700 text-white p-3" onClick={() => {
        netlifyIdentity.open()
      }}>Login</button>
      </div>
    )
  }

};

export default Main;
