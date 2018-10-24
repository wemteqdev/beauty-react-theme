import React, { Component } from 'react';
import SignupNavigation from '../widget/nav-bar/signup-navigation';

class SignupStepHeader extends Component {
    render() {
        return (
            <div className = "signup-step-header">
                <SignupNavigation {...this.props}/>
            </div>
        );
    }
}

export default SignupStepHeader;
