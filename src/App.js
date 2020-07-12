import React , {Component} from 'react';
import './App.css';
import EmployeeInfo from './Components/Employee/EmpolyeeInfo';
import {Route, Switch , Redirect} from 'react-router-dom';
import Header from "./Pages/Header";
import {Footer} from "./Pages/Footer";
import Home from "./Pages/Home";
import Emp_Dep from "./Components/Departments/Emp_Dep";
import EmployeeID from "./Components/Employee/EmployeeID";
class App extends Component {
constructor(props) {
super (props);
    this.state = {
        employees: [],
        IotAndGis : [] ,
        Developers :[] ,
        networks : [] ,
    }

}
Employee = ({history}) => {
    return (
      <EmployeeInfo employees={this.state.employees} history={history}   />
    );
};
DevEmp = ({history}) => {
    return (
      <Emp_Dep employees={this.state.Developers} history={history} />
    );
};
    NetEmp = ({history}) => {
        return (
            <Emp_Dep employees={this.state.networks} history={history} />
        );
    };
    IOTEmp = ({history}) => {
        return (
            <Emp_Dep employees={this.state.IotAndGis} history={history} />
        );
    };
    componentDidMount() {
        fetch('https://dtcdashboard.pythonanywhere.com/api/v1/employee/')
            .then((res) => res.json())
            .then((employee) => this.setState({ employees: employee,IotAndGis : employee.filter(emp => emp.department === "IOT & GIS"),
                Developers: employee.filter(emp => emp.department === "Developers") , networks:employee.filter(emp => emp.department === "Network Security")
            }));
    }
    EmployeeId = ({match}) => {
    return(
      <EmployeeID employees={this.state.employees} match={match} />
    );
    };
render() {
    return (
        <React.Fragment>
        <Header iot={this.state.IotAndGis.length}  dev={this.state.Developers.length} net={ this.state.networks.length}/>
      <Switch>
          <Route path="/networks" component={this.NetEmp} />
          <Route path="/employee/:empId" component={this.EmployeeId}/>
          <Route path="/developers" component={this.DevEmp} />
          <Route path="/iotandgis" component={this.IOTEmp}/>
          <Route exact path='/employee' component={this.Employee}/>
          <Route path='/' exact component={() => <Home/>}/>
          <Redirect to='/'/>
      </Switch>
        <Footer/>
        </React.Fragment>
    );
}
}

export default App;
