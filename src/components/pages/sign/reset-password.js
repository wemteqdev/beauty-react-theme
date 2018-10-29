import React, { Component } from 'react';
import assets from '../../assets';
import OlaInput from "../../widget/ola-input";

import Modal from '../modal';

import {isMobile} from 'react-device-detect';

class ResetPasswordPage extends Component {
    handleCheckboxChange = () => {
    }
    renderWebPage = () => {
        return (
            <div className="sign-page reset-password">
                <div className="title">
                    Reset Password
                </div>
                <div className="marginTop-12">
                    Enter the email address associated with your account, and we’ll email you a link to reset your password.
                </div>
                <div>
                    <div className="marginTop-24">
                        Email
                    </div>
                    <div className="marginTop-12">
                        <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                    </div>
                </div>
                <div className="marginTop-44 link-block d-flex justify-content-between">
                    <a className="back-to-sign-in d-flex align-items-center" href="" data-toggle="modal" data-target="#signinModal" data-dismiss="modal">
                        <img alt="..." src={assets.left_arrow_medium_black} className="mr-2"/>
                        Back to Sign In
                    </a>
                    <button className = "btn ola-btn-primary m-btn">Send Reset Link</button>
                </div>
            </div>
        );
    }
    renderMobilePage = () => {
        return (
            <div className="sign-page reset-password mt-5 px-0">
                <div className="title">
                    Reset Password
                </div>
                <div>
                    <div className="marginTop-24">
                        Email Address
                    </div>
                    <div className="marginTop-12">
                        <OlaInput type = "text" placeholder = "Type Here..." className="w-100"/>
                    </div>
                </div>
                <button className = "marginTop-44  btn ola-btn-primary m-btn w-100">Send Reset Link</button>
            </div>
        );
    }
    render(){
        if (!isMobile) {
            return (
                <Modal id="forgotModal">
                    {this.renderWebPage()}
                </Modal>
            );
        } else {
            return this.renderMobilePage()
        }
    }
}
export default ResetPasswordPage;