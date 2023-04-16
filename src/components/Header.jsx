import { useSelector } from "react-redux";
import { login } from "../store/actions";
import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();

    function logUser(e){
        e.preventDefault();
        dispatch(login())
    }
    const userName = useSelector(state => state.userName);
    return(
        <div className=" container p-6 flex justify-between">
            <h1 >Employee Rewarder</h1>
            <h1>{userName}</h1>
            <button onClick={logUser}>Login</button>
        </div>
    )
}

export default Header;