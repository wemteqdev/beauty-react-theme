import React from 'react';
import assets from '../../assets';
import {
    Link    
} from 'react-router-dom';
import NavSearchBar from '../searchbox/nav-searchbar';


class NewsPageNavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
                <div className = "container">
                    <div className = "nabbar-brand">
                        <Link to="/">
                            <img alt="..." src = {assets.logo}/>
                        </Link>
                    </div>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item nav-search pt-1">
                                <NavSearchBar placeholder = "Search"/>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/news">News Listing <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/mybooking">Become a Pro</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/help">Help</Link>
                            </li>
                            <li className="nav-item">
                                <Link className = "nav-link shoping-card" to = "/help">
                                    <img alt="..." src = {assets.shopping_cart_black}/>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className = "nav-link message-group" to = "/help">
                                    <img alt="..." src = {assets.message_group_black}/>
                                    <div className = "badge">14</div>
                                </Link>
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

export default NewsPageNavBar;