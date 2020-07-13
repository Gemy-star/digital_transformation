import React from 'react';
import { Card, CardBody, CardImg, CardText, CardFooter  } from 'reactstrap';
import './employee.styles.css';

const Employee = (props) => {
  return (
    <div className="card-container">
      <Card >
        <CardBody>
          <CardImg src={props.employee.picture} className="profile-pic" onClick={() => props.onClick(props.employee , props.history)} />
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
