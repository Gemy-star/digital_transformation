import React from 'react';
import { Card, CardBody, CardImg, CardText, CardFooter , CardHeader } from 'reactstrap';
import './employee.styles.css';
import {Link} from "react-router-dom";

const Employee = (props) => {
  return (
    <div className="card-container">
      <Card onClick={() => props.onClick(props.employee )}>
        <CardHeader>
          <Link to={`/employee/${props.employee.id}`}>
          <span className="fa fa-address-card"></span>
              </Link>
        </CardHeader>
        <CardBody>
          <CardImg src={props.employee.picture} className="profile-pic" />
          <CardText>{props.employee.name}</CardText>
        </CardBody>
        <CardFooter>
          <span
            className="fa fa-window-close"
            onClick={() => props.Delete(props.employee)}
          ></span>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Employee;
