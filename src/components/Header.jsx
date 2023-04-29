import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/actions";
import { Link } from "react-router-dom";
import { useState } from "react";
import netlifyIdentity from 'netlify-identity-widget';


const Header = () => {
    const user = useSelector(state => state.user);
    const isLogin = useSelector(state => state.isLogin);
    const employees = useSelector(state => state.employees);
  
netlifyIdentity.init({
    container: '#netlify-modal', // defaults to document.body
    locale: 'en' // defaults to 'en'
  });

    return(
        <div className=" m-6">
            <div className=" mx-auto rounded-lg container px-8 py-6 bg-gray-700 text-white flex justify-between items-center">
            <Link to="/"  className=" font-bold text-xl">Employee Rewarder</Link>
            <Link to="vote" className=" bg-gray-50 text-gray-900 p-2">Vote an employee</Link>
            <div className="flex items-center gap-6">
                <h1>{user}</h1>
                <button onClick={() => {
                    netlifyIdentity.logout(); // open the modal

                }} className=" border p-2">{isLogin ? "Logout" : "Login"}</button>
            </div>
            </div>
        </div>
    )
}

export default Header;  