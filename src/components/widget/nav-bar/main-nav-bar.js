import React from 'react';
import assets from '../../assets';
import {
    Link    
} from 'react-router-dom';
import NavSearchBar from '../searchbox/nav-searchbar';

class MainNavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
                <div className = "container">
                    <div className = "nabbar-brand">
                        <Link className="float-left" to="/">
                            <img alt="..." src = {assets.logo}/>
                        </Link>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Olafic Press</Link>
                            </li>
                        </ul>
                    </div>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/news">News <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/features">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/media">Media</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/team">Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item pt-1">
                                <div className = "nav-link nav-search">
                                    <NavSearchBar placeholder = "Search"/>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link user-option" to="/help">
                                    <img alt="..." className = "user-img" src = {assets.storyLL_2}/>
                                    <img alt="..." className = "dropdown-icon" src = {assets.dropdown_filled_black}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MainNavBar;