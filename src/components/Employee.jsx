import {employeeContainer, empName, empDesignation, empMarks} from './styles/employee.module.css'

const Employee = ({employee}) => {
    return(
        <li>
            <div className={employeeContainer}>
                <h2 className={empName}>{employee.name}</h2>
                <h2 className={empDesignation}>{employee.designation}</h2>
                <h2 className={empMarks}>{employee.marks}</h2>
            </div>
        </li>
    )
}

export default Employee;