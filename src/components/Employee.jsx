
const Employee = ({employee}) => {
    return(
        <li>
            <div className="flex gap-6 justify-center border-b-2 p-2" >
                <h2 >{employee.name}</h2>
                <h2 >{employee.designation}</h2>
                <h2 >{employee.votesFromEmployees}</h2>
            </div>
        </li>
    )
}

export default Employee;