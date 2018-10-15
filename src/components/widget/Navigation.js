import React from 'react';
import assets from '../assets';
import {
    Link    
} from 'react-router-dom';

const NavItem = props => {
    const pageURI = window.location.hash + window.location.search;
    const liClassName = (+props.path === pageURI) ? "nav-item active" : "nav-item";
    // const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
    return (
        <div className={liClassName}>
            <Link to = {props.path} className = "nav-link">
                {props.name}
                {(props.path === pageURI) ? (<span className = "sr-only">(current)</span>): ""}
            </Link>
        </div>
    );
}

class NavDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: this.props.dropOpen
        };
    }
    showDropdown(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        this.props.onToggle();
    }
    render() {
        const classDropdownMenu = 'dropdown-menu' + (this.props.dropOpen ? ' show' : '')
        // console.log(classDropdownMenu);
        return (
            <div className="dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false"
                    onClick={(e) => {this.showDropdown(e)}}>
                    {this.props.name}
                    <span className = "arrow"><img alt="..." src = {assets.arrowdown}/></span>
                </Link>
                <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
  

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dropOpen:false
        }
        this.hideDropDown = this.hideDropDown.bind(this);
        this.onToggle = this.onToggle.bind(this);
    }

    hideDropDown(e){
        this.setState({dropOpen:false});
    }

    showDropdown(e){
        this.setState({dropOpen:true});
    }
    onToggle(){
        this.setState(prevState => ({
            dropOpen: !prevState.dropOpen
        }));
    }

    render() {
        return (
            <div className="ola-navbar pt-3 fixed-top container-fluid bg-white">
                <div className="container">
                    <div className = "nabbar-brand">
                        <Link to="/">
                            <img alt="..." src = {assets.logo}/>
                        </Link>
                        <NavDropdown name="How It Works" dropOpen = {this.state.dropOpen} onToggle = {this.onToggle}>
                            <ul className = "list-unstyled">
                                <li>
                                    <Link className="dropdown-item" to="/forbusiness" onClick = {this.hideDropDown}>For Business</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/forpros" onClick = {this.hideDropDown}>For Professionals</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/formembers" onClick = {this.hideDropDown}>For Members</Link>
                                </li>
                            </ul>
                        </NavDropdown>
                    </div>
                    <div className="navbar-links">
                        <NavItem name="List Your Business" path="/"/>
                        <NavItem name="Become a Pro" path="/becomepro"/>
                        <NavItem name="Help" path="/help"/>
                        <NavItem name="Sign Up" path="/signup"/>
                        <NavItem name="Sign In" path="/singin"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;