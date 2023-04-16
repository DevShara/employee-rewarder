
const Employee = ({employee}) => {
    return(
        <li>
            <div className="flex gap-6 justify-center" >
                <h2 >{employee.name}</h2>
                <h2 >{employee.designation}</h2>
                <h2 >{employee.marks}</h2>
            </div>
        </li>
    )
}

export default Employee;