import React, { Component } from 'react';
import HelpNavigation from '../widget/help-navigation';
import {
    Link    
} from 'react-router-dom';
import assets from '../assets';
import DefaultSearchBar from '../widget/searchbox/defaultSearchBar';


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



class HelpHeader extends Component {
    render() {
        return (
            <div className = "help-header">
                <HelpNavigation/>
                <div className = "title">How can we help?</div>
                <div className = "search-block">
                    <DefaultSearchBar placeholder = "Search Help Articles"/>
                </div>
            </div>
        );
    }
}

export default HelpHeader;
