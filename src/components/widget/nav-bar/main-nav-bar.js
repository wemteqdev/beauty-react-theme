import React from 'react';
import assets from '../../assets';
import {
    Link    
} from 'react-router-dom';
import NavSearchBar from '../searchbox/nav-searchbar';

const NavItem = props => {
    const pageURI = window.location.hash + window.location.search;
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
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

// class NavDropdown extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isToggleOn: this.props.dropOpen
//         };
//     }
//     showDropdown(e) {
//         e.preventDefault();
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//         this.props.onToggle();
//     }
//     render() {
//         const classDropdownMenu = 'dropdown-menu' + (this.props.dropOpen ? ' show' : '')
//         // console.log(classDropdownMenu);
//         return (
//             <div className="dropdown">
//                 <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown"
//                     aria-haspopup="true" aria-expanded="false"
//                     onClick={(e) => {this.showDropdown(e)}}>
//                     {this.props.name}
//                     <span className = "arrow"><img alt="..." src = {assets.arrowdown}/></span>
//                 </Link>
//                 <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
//                     {this.props.children}
//                 </div>
//             </div>
//         )
//     }
// }
  

class MainNavBar extends React.Component {

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
                        <NavItem name = "Olafic Press" path = "/"/>
                    </div>
                    <div className="navbar-links">
                        <NavItem name="News" path="/news"/>
                        <NavItem name="Features" path="/features"/>
                        <NavItem name="Media" path="/media"/>
                        <NavItem name="Team" path="/team"/>
                        <NavItem name="Contact" path="/contact"/>
                        <div className = "nav-search">
                            <NavSearchBar placeholder = "Search"/>
                        </div>
                        <Link to = "/help" className = "user-option">
                            <img alt="..." className = "user-img" src = {assets.storyLL_2}/>
                            <img alt="..." className = "dropdown-icon" src = {assets.dropdown_filled_black}/>
                        </Link>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default MainNavBar;