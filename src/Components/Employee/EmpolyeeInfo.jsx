import React, { Component } from 'react';
import './employee.styles.css';
import Employee from './Employee';
class EmployeeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      searchText: '',
      clickedEmployee: null,
      showEmployee: false,
    };
  }

  handleClick = (employee) => {
    this.setState(
      { clickedEmployee: employee, showEmployee: !this.state.showEmployee },
      () => {
        console.log(this.state.clickedEmployee, this.state.showEmployee);
      }
    );
  };
  componentDidMount() {
    fetch('https://dtcdashboard.pythonanywhere.com/api/v1/employee/')
      .then((res) => res.json())
      .then((employee) => this.setState({ employees: employee }));
  }
  handleDelete = (employee) => {
    const filteredEmp = this.state.employees.filter(
      (e) => e.id !== employee.id
    );
    this.setState({
      employees: filteredEmp,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="card-list">
          {this.state.employees.map((e) => {
            return (
              <Employee
                key={e.id}
                employee={e}
                onClick={this.handleClick}
                Delete={this.handleDelete}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default EmployeeInfo;
