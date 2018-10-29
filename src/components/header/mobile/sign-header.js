import React, { Component } from 'react';
import SignNavigation from '../../widget/nav-bar/mobile/sign-navigation';

class SignHeader extends Component {
    render() {
        return (
            <div className = "signup-step-header">
                <SignNavigation {...this.props}/>
            </div>
        );
    }
}

export default SignHeader;
