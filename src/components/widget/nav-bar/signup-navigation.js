import React from 'react';
import assets from '../../assets';
import {
    Link    
} from 'react-router-dom';


class SignupNavigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
                <div className="Progress-Bar w-100 d-block">
                    <div className="Progress-Bar-1"></div>
                </div>
                <div className = "container">
                    <div className = "nabbar-brand">
                        <Link className="mr-3" to="/">
                            <img alt="..." src = {assets.logo}/>
                        </Link>
                        Step 1: Let’s get started
                    </div>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">List Your Business <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/becomepro">Become a Pro</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
);
    }
}

export default SignupNavigation;