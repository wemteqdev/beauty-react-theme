import React, { Component } from 'react';
import assets from '../../assets';
import OlaInput from "../../widget/ola-input";

import {Link} from 'react-router-dom';

class ResetPasswordPage extends Component {
    handleCheckboxChange = () => {
    }
    render(){
        return (
            <div className="sign-page reset-password">
                <div className="close">
                    <img alt="..." src={assets.action_X_black_s}/>
                </div>
                <div className="container-fluid">
                    <div className="row title">
                        Reset Password
                    </div>
                    <div className="row marginTop-12">
                        Enter the email address associated with your account, and we’ll email you a link to reset your password.
                    </div>
                    <div>
                        <div className="row marginTop-24">
                            Email
                        </div>
                        <div className="row marginTop-12">
                            <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                        </div>
                    </div>
                    <div className="row marginTop-44 link-block d-flex justify-content-between">
                        <Link to="/signin" className="back-to-sign-in d-flex align-items-center">
                            <img alt="..." src={assets.left_arrow_medium_black} className="mr-2"/>
                            Back to Sign In
                        </Link>
                        <button className = "btn ola-btn-primary m-btn">Send Reset Link</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default ResetPasswordPage;