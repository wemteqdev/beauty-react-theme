import React from 'react';
import assets from '../assets';
import {
    Link    
} from 'react-router-dom';

import {isMobile} from 'react-device-detect';

class Navigation extends React.Component {
   
    render() {
        let containerClassName = "container";
        if (isMobile) {
          containerClassName = "container mobile_container";
        }
            // if (!isMobile) {
            return (
                <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
                    <div className = {containerClassName}>
                        <Link className="nabbar-brand mr-3" to="/">
                            <img alt="..." src = {assets.logo}/>
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="" id="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        English
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
                                    <Link className="nav-link" to="/signin">Sign In</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            );
        // } else {
        //     return (
        //         <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
        //             <div className = "container">
        //                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                     <span className="navbar-toggler-icon"></span>
        //                 </button>

        //                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                     <ul className="navbar-nav mr-auto">
        //                         <li className="nav-item active">
        //                             <Link className="nav-link" to="/news">News <span className="sr-only">(current)</span></Link>
        //                         </li>
        //                         <li className="nav-item">
        //                             <Link className="nav-link" to="/features">Features</Link>
        //                         </li>
        //                         <li className="nav-item">
        //                             <Link className="nav-link" to="/media">Media</Link>
        //                         </li>
        //                         <li className="nav-item">
        //                             <Link className="nav-link" to="/team">Team</Link>
        //                         </li>
        //                         <li className="nav-item">
        //                             <Link className="nav-link" to="/contact">Contact</Link>
        //                         </li>
        //                     </ul>
        //                 </div>
        //                 <ul className="navbar-nav navbar-right">
        //                     <li className="nav-item">
        //                         <Link className = "nav-link shoping-card" to = "/help">
        //                             <img alt="..." src = {assets.shopping_cart_black}/>
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link className = "nav-link message-group" to = "/help">
        //                             <img alt="..." src = {assets.user}/>
        //                             <div className = "badge">2</div>
        //                         </Link>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </nav>
        //     );
        // }
    }
}

export default Navigation;