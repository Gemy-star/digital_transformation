import React from 'react';
import '../Components/Employee/employee.styles.css'
import {Jumbotron , Container} from 'reactstrap';

const Home = () => {
   return (
       <div>
           <Jumbotron fluid>
               <Container fluid>
                   <h1 className="App heading display-3">مركز التحول الرقمى </h1>
                 <center>
                     <img src="assets/images/logo.png" alt="logo" width="100" height="50" className="App-logo"/>
                 </center>
                   <p className="App heading lead">مستقبل مصر بأيدينا</p>
               </Container>
           </Jumbotron>
       </div>
   )  ;
};

export default Home;