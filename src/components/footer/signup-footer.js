import React, { Component } from 'react';
// import {Link} from 'react-router-dom';

class SignupFooter extends Component {
    render() {
        return (
            <div className = "border-top border-black">
                <div className="signup-footer-container">
                    <div className ="signup-footer mt-0 d-flex justify-content-between align-items-center">
                        <div className = "step-title">Welcome to Olafic</div>
                        <button className = "btn ola-btn-primary s-btn">Sign Up</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupFooter;
