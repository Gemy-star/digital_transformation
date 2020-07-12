import React, { Component } from 'react';
import './employee.styles.css';
import Employee from './Employee';
import SearchBox from "./SearchBox";
class EmployeeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: props.employees,
      searchText: '',
      clickedEmployee: null,
      showEmployee: false,
    };
  }

  handleClick = (employee , history) => {
    this.setState(
      { clickedEmployee: employee, showEmployee: !this.state.showEmployee });
     history.push({pathname:'/employee/'+employee.id})
  };
  handleChange = (event) => {
    this.setState({ searchText: event.target.value });
  };
  handleDelete = (employee) => {
    const filteredEmp = this.state.employees.filter(
      (e) => e.id !== employee.id
    );
    this.setState({
      employees: filteredEmp,
    });
  };
  render() {
    const { employees, searchText } = this.state;
    const filtered = employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <React.Fragment>
        <div className="App">
          <SearchBox placeholder="Search by Name" onChange={this.handleChange}/>
        </div>
        <div className="card-list">
          {filtered.map((e) => {
            return (
              <Employee
                key={e.id}
                employee={e}
                onClick={this.handleClick}
                Delete={this.handleDelete}
                history={this.props.history}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default EmployeeInfo;
