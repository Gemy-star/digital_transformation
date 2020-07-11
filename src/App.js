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
    componentDidMount() {
        fetch('https://dtcdashboard.pythonanywhere.com/api/v1/employee/')
            .then((res) => res.json())
            .then((employee) => this.setState({ employees: employee,IotAndGis : employee.filter(emp => emp.department === "IOT & GIS"),
                Developers: employee.filter(emp => emp.department === "Developers") , networks:employee.filter(emp => emp.department === "Network Security")
            }));
    }
    EmployeeId = ({match})=> {
    return(
      <EmployeeID employees={this.state.employees} match={match} />
    );
    };
render() {
    return (
        <React.Fragment>
        <Header iot={this.state.IotAndGis.length}  dev={this.state.Developers.length} net={ this.state.networks.length}/>
      <Switch>
          <Route path="/networks" component={() => <Emp_Dep employees={this.state.networks}/>} />
          <Route path="/employee/:empId" component={this.EmployeeId}/>
          <Route path="/developers" component={() => <Emp_Dep employees={this.state.Developers}/>} />
          <Route path="/iotandgis" component={() => <Emp_Dep employees={this.state.IotAndGis}/>}/>
          <Route exact path='/employee' component={()=><EmployeeInfo employees={this.state.employees}/> }/>
          <Route path='/' exact component={() => <Home/>}/>
          <Redirect to='/'/>
      </Switch>
        <Footer/>
        </React.Fragment>
    );
}
}

export default App;
