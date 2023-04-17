import { useEffect, useState } from 'react';
import Employee from './Employee';

const Employees = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetchEmployees()
    }, [])

    async function fetchEmployees(){
        const res = await fetch('../data.json')
        const data = await res.json();

        setEmployees(data)
    } 

    return(
    <>
        <div className='container'>
            <ul className=' mx-auto '>
                {employees.map(employee => {
                    return (
                        <Employee key={employee.empId} employee={employee} />
                    )
                })}
            </ul>
        </div>
    </>
    )

};

export default Employees;