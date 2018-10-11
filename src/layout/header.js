import React from 'react'
import assets from '../assets'

const Header = (props) => {
    return (
        <div className="fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <a className="navbar-brand" href="#">
                        <img src={assets.logo} alt=""></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                How It Works &nbsp;<img src = {assets.arrowdown}/>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">For Business</a>
                                    <a className="dropdown-item" href="#">For Professionals</a>
                                    <a className="dropdown-item" href="#">For Members</a>
                                </div>
                            </li>
                        </ul>
                        <div className="my-2 my-lg-0 d-flex">
                            <div className="nav-item active">
                                <a className="nav-link" href="/">List Your Business</a>
                            </div>
                            <div className="nav-item ">
                                <a className="nav-link" href="/">Become a Pro</a>
                            </div>
                            <div className="nav-item ">
                                <a className="nav-link" href="/">Help</a>
                            </div>
                            <div className="nav-item ">
                                <a className="nav-link" href="/">Sign Up</a>
                            </div>
                            <div className="nav-item ">
                                <a className="nav-link" href="/">Sign In</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header