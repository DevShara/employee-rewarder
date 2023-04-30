import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rateEmployee, voteOver } from "../store/actions";
import netlifyIdentity from 'netlify-identity-widget';


const VoteEmployee = () => {
    const employees = useSelector(state => state.employees);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();


    const [currentUser, setCurrentUser] = useState({});
    const [voted, setVoted] = useState(!currentUser.voteAvailable);
    console.log('em', currentUser)

 
    function vote(e){
        e.preventDefault();
        // dispatch(rateEmployee(+e.target.employeeName.value, +e.target.rate.value));
        dispatch(voteOver(currentUser.empId));
        setVoted(true);        
    }

    useEffect(() => {
        employees.forEach(employee => {
            if(employee.email == netlifyIdentity.currentUser().email){
                setCurrentUser(employee);
            }
        })     
    }, [voted])


    if(currentUser.voteAvailable){
        return (
            <div className="container m-6">
                <h1 className=" text-2xl">{currentUser.name} Vote your favorite co worker</h1>
                <form className=" mt-6" onSubmit={vote} >
                    <div className="flex gap-6">
                        <label htmlFor="employeeName" className=" block mt-6">
                            Select a co worker
                            <select id="employeeName" className="block mt-3">
                                {employees.map(employee => {
                                return <option key={employee.empId} value={employee.empId}>{employee.name}</option>
                                })}
                            </select>
                        </label>
                        <label htmlFor="rate" className=" block mt-6">
                            Rate
                            <select id="rate"  className="block mt-3">
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                                <option value={8}>8</option>
                                <option value={9}>9</option>
                                <option value={10}>10</option>
                            </select>
                        </label>
                    </div>
                    <button  className="mt-6  bg-gray-600 px-3 py-1 text-white">Submit</button>
                </form>
    
                
            </div>
        )   
    }

    

    return(
        <div className="container m-6">
            Sorry! You have already voted for this month 
        </div>
    )

   
}

export default VoteEmployee;