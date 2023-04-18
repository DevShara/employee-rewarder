import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/actions";
import { Link } from "react-router-dom";

const Header = () => {
    const userName = useSelector(state => state.userName);
    const isLogin = useSelector(state => state.isLogin);
    const dispatch = useDispatch();

    function logUser(e){
        e.preventDefault();
        
        if(!isLogin){
            dispatch(login(102));
        }else{
            dispatch(logout())            
        }  
    }

   

    return(
        <div className=" m-6">
            <div className=" mx-auto rounded-lg container px-8 py-6 bg-gray-700 text-white flex justify-between items-center">
            <Link to="/"  className=" font-bold text-xl">Employee Rewarder</Link>
            <Link to="vote" className=" bg-gray-50 text-gray-900 p-2">Rate an employee</Link>
            <div className="flex items-center gap-6">
                <h1>{userName}</h1>
                <button onClick={logUser} className=" border p-2">{isLogin ? "Logout" : "Login"}</button>
            </div>
            </div>
        </div>
    )
}

export default Header;  