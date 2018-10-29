import React from 'react';
import assets from '../../../assets';
import {
    Link    
} from 'react-router-dom';

class SignNavigation extends React.Component {
    renderLink = () => {
        let page = this.props.page;
        if (page === 'signin') {
            return (
                <Link to="/signup">
                    Sign Up?
                </Link>
            )
        } else if (page === 'signup') {
            return (
                <Link to="/signin">
                    Sign In?
                </Link>
            )
        } else if (page === 'invite') {
            const who = this.props.who.capitalize();
            return (
                <Link to="/invite-friends">
                    Invite {who} Later
                </Link>
            )
        } else {
            return <div></div>
        }

    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
                <div className = "container d-flex justify-content-between">
                    <Link to="/">
                        <img alt="..." src = {assets.back}/>
                    </Link>
                    {this.renderLink()}
                </div>
            </nav>
        )
    }
}

export default SignNavigation;