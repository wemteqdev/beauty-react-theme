import React from 'react';
import assets from '../assets';
import {
    Link    
} from 'react-router-dom';


class HelpNavigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className = "container">
                    <Link className="nabbar-brand" to="/">
                        <img alt="..." src = {assets.logoWhite}/>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/">List Your Business <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/becomepro">Become a Pro</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/help">My Bookings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/help">Help</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white shoping-card" to="/help">
                                    <img alt="..." src = {assets.shopping_cart_white}/>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link message-group" to="/help">
                                <img alt="..." src = {assets.message_group_white}/>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link user-option" to="/help">
                                    <img alt="..." className = "user-img" src = {assets.storyLL_2}/>
                                    <img alt="..." className = "dropdown-icon" src = {assets.dropdown_filled_white}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default HelpNavigation;