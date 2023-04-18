import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rateEmployee, voteOver } from "../store/actions";

const VoteEmployee = () => {
    const employees = useSelector(state => state.employees);
    const dispatch = useDispatch();
   
    function vote(e){
        e.preventDefault();
        if(employees[2].voteAvailable){
            dispatch(rateEmployee(+e.target.employeeName.value, +e.target.rate.value));
            dispatch(voteOver(102))
        }
    }
    
    return (
        <div className="container m-6">
            <h1 className=" text-2xl">Vote your favorite co worker</h1>
            <form className=" mt-6" onSubmit={vote}>
                <div className="flex gap-6">
                    <label htmlFor="employeeName" className=" block mt-6">
                        Select a co worker
                        <select id="employeeName" className="block mt-3">
                            {employees.map(employee => {
                            return <option key={employee.empId} value={employee.empId}>{employee.empId}</option>
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

export default VoteEmployee;