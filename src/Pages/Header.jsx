import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, NavbarBrand, Nav , Collapse , NavbarToggler , NavItem , UncontrolledDropdown , DropdownToggle , DropdownMenu , DropdownItem} from 'reactstrap';
class Header extends Component {
constructor(props) {
super (props);
this.state = {
    collapsedOpen:false
}
}
collapseOpen = () => {
    this.setState({isOpen: !this.state.collapsedOpen})
};

    render() {
return (
    <React.Fragment>
<Navbar  color="light" light expand="md">
    <div className="container">
        <NavbarToggler onClick={this.collapseOpen}/>
        <NavbarBrand className='mr-auto heading' href="/">
            مركز التحول الرقمى
        <img src="assets/images/logo.png" alt="logo"  height="30" width="41"/>
        </NavbarBrand>
        <Collapse navbar isOpen={this.state.collapsedOpen}>
            <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/">
                        <span className="fa fa-home"></span> Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/employee">
                        <span className="fa fa-user"></span> Employee
                    </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      <span className="fa fa-building"></span>  Departments
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <NavLink className="nav-link" to="/iotandgis">
                                <span className="fa fa-map"></span>  IOT & GIS
                                <span className="badge badge-light">{this.props.iot}</span>
                            </NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink to='/developers' className="nav-link">
                                <span className="fa fa-mobile"></span>  Developers
                                <span className="badge badge-light">{this.props.dev}</span>

                            </NavLink>
                        </DropdownItem>
                        <DropdownItem>
                            <NavLink to='/networks' className="nav-link">
                                <span className="fa fa-laptop"></span>  Network Security
                                <span className="badge badge-light">{this.props.net}</span>
                            </NavLink>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Collapse>

    </div>
</Navbar>

</React.Fragment>);
}
}

export default Header;


