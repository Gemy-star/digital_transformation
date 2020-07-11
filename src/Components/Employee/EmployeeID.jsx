import React from 'react';
import {Card , CardBody , CardImg , CardText , CardTitle , CardHeader , Table} from 'reactstrap';
import '../Employee/employee.styles.css';
const EmployeeID = props => {
const employeeId = parseInt( (props.match.params.empId));
const employee =  props.employees.filter(emp => emp.id === employeeId);
console.log(employee)
if (employee) {
    return (employee.map(employee => {
        return(
            <React.Fragment>

            < div className="row">
                <div className="col-md">
                    <Card>
                        <CardImg src={employee.picture} className="profile-pic" alt={employee.name}/>
                        <CardBody>
                            <CardTitle className="App heading" > <span className="fa fa-user-circle"></span> {employee.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
              <card>
                  <CardHeader>
                      <CardText className="App heading"> البطاقه الشخصيه <span className="fa fa-address-card"></span> </CardText>
                  </CardHeader>
                  <CardBody>
                      <Table>
                          <tbody>
                          <tr>
                              <td> <span className="fa fa-user"></span></td>
                           <td>
                               <CardText>{employee.age}</CardText>
                           </td>
                          </tr>
                          <tr>
                              <td> <span className="fa fa-map"></span></td>
                              <td>
                                  <CardText>{employee.address}</CardText>
                              </td>
                          </tr>
                          <tr>
                              <td> <span className="fa fa-mobile-phone"></span></td>
                              <td>
                                  <CardText>{employee.phone}</CardText>
                              </td>
                          </tr>
                          <tr>
                              <td> <span className="fa fa-heartbeat"></span></td>
                              <td>
                                  <CardText>{employee.status}</CardText>
                              </td>
                          </tr>
                          <tr>
                              <td> <span className="fa fa-envelope"></span></td>
                              <td>
                                  <CardText>{employee.email}</CardText>
                              </td>
                          </tr>
                          <tr>
                              <td> <span className="fa fa-info-circle"></span></td>
                              <td>
                                  <CardText>{employee.isbn}</CardText>
                              </td>
                          </tr>
                          <tr>
                              <td> <span className="fa fa-building-o"></span></td>
                              <td>
                                  <CardText>{employee.department}</CardText>
                              </td>
                          </tr>
                          <tr>
                              <td> <span className="fa fa-graduation-cap"></span></td>
                              <td>
                                  <CardText>{employee.specialization}</CardText>
                              </td>
                          </tr>
                          <tr>
                              <td> <span className="fa fa-university"></span></td>
                              <td>
                                  <CardText>{employee.university}</CardText>
                              </td>
                          </tr>
                          <tr>
                              <td> <span className="fa fa-birthday-cake"></span></td>
                              <td>
                                  <CardText>{employee.birth_date}</CardText>
                              </td>
                          </tr>
                          <tr>
                              <td> <span className="fa fa-calendar-check-o"></span></td>
                              <td>
                                  <CardText>{employee.date_hired}</CardText>
                              </td>
                          </tr>
                          </tbody>
                      </Table>
                  </CardBody>
              </card>
                </div>
                <div className="col-6">
                    <card>
                        <CardHeader>
                            <CardText className="App heading"> المهارات <span className="fa fa-laptop"></span> <span className="badge badge-dark"></span>{employee.skill.length}</CardText>
                        </CardHeader>
                        <CardBody>
                            <Table>
                                <tbody>
                                {employee.skill.map(
                                    s => {
                                        return (
                                            <tr>
                                                <td> <span className="fa  fa-play-circle fa-spin"></span></td>
                                                <td>
                                                    <CardText>{s}</CardText>
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                                </tbody>
                            </Table>

                        </CardBody>
                    </card>
                </div>
            </div>
            </React.Fragment>

        );
    }));


}else {
    return (<div></div>);
}

};
export default EmployeeID;