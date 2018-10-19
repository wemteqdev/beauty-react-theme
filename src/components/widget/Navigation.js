import React from 'react';
import assets from '../assets';
import {
    Link    
} from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
                <div className = "container">
                    <Link className="nabbar-brand" to="/">
                        <img alt="..." src = {assets.logo}/>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" id="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Language
                                </a>
                                <div className="dropdown-menu" aria-labelledby="">
                                    <Link className="dropdown-item" to="/">English</Link>
                                    <Link className="dropdown-item" to="/">French</Link>
                                    <Link className="dropdown-item" to="/">Spanish</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" id="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    How It Works
                                </a>
                                <div className="dropdown-menu" aria-labelledby="">
                                    <Link className="dropdown-item" to="/forbusiness">For Business</Link>
                                    <Link className="dropdown-item" to="/forpros">For Professionals</Link>
                                    <Link className="dropdown-item" to="/formembers">For Members</Link>
                                </div>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">List Your Business <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/becomepro">Become a Pro</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/help">Help</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/singin">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;