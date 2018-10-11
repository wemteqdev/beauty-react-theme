import React from 'react';
import assets from '../../assets';
import {
    Link    
} from 'react-router-dom';
import NavSearchBar from '../searchbox/nav-searchbar';

const NavItem = props => {
    const pageURI = window.location.hash + window.location.search;
    const liClassName = ("#"+props.path === pageURI) ? "nav-item active" : "nav-item";
    const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
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
        console.log(classDropdownMenu);
        return (
            <div className="dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false"
                    onClick={(e) => {this.showDropdown(e)}}>
                    {this.props.name}
                    <span className = "arrow"><img src = {assets.arrowdown}/></span>
                </Link>
                <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
  

class NewsPageNavBar extends React.Component {

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
            <div className="ola-navbar">
                <div className = "nabbar-brand">
                    <Link to="/">
                        <img src = {assets.logo}/>
                    </Link>
                    <div className = "nav-search">
                        <NavSearchBar placeholder = "search" role = "left"/>
                    </div>
                </div>
                <div className="navbar-links">
                    <NavItem name="News Listing" path="/news"/>
                    <NavItem name="My Booking" path="/mybooking"/>
                    <NavItem name="Help" path="/help"/>

                    <Link to = "/help" className = "shoping-card">
                        <img src = {assets.shopping_cart_black}/>
                    </Link>
                    <Link to = "/help" className = "message-group">
                        <img src = {assets.message_group_black}/>
                        <div className = "badge">14</div>
                    </Link>
                    <Link to = "/help" className = "user-option">
                        <img className = "user-img" src = {assets.storyLL_2}/>
                        <img className = "dropdown-icon" src = {assets.dropdown_filled_black}/>
                    </Link>
                    
                </div>
            </div>
        );
    }
}

export default NewsPageNavBar;