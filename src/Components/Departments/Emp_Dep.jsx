import React from 'react';
import EmployeeInfo from "../Employee/EmpolyeeInfo";
import '../Employee/employee.styles.css';

const Emp_Dep = (props) => {
    return (<div>
        <EmployeeInfo employees ={props.employees}/>
    </div>);
};
export default Emp_Dep;
