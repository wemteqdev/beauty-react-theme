import React, { Component } from 'react';
import assets from '../../assets';
import OlaInput from "../../widget/ola-input";
import CheckBox from '../../widget/checkbox';

import Modal from '../modal';

import {isMobile} from 'react-device-detect';
import {Link} from 'react-router-dom';

class SigninPage extends Component {
    handleCheckboxChange = () => {
    }
    renderWebPage = () => {
        return (
            <div className="sign-page">
                <button className = "btn ola-btn-facebook w-100 text-white" onClick = {this.onClick}>
                    <img alt="..." src={assets.facebookBlack} className="text-white mr-2"/> Continue with Google
                </button>
                <button className = "marginTop-12 btn ola-btn-google w-100" onClick = {this.onClick}>
                    <img alt="..." src={assets.google} className="text-white mr-2"/> Continue with Facebook
                </button>
                <div className="marginTop-12 d-flex justify-content-center separator">
                    <span>or</span>
                </div>
                <div>
                    <div className="marginTop-24">
                        Email
                    </div>
                    <div className="marginTop-12">
                        <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                    </div>
                </div>
                <div>
                    <div className="marginTop-24">
                        Password
                    </div>
                    <div className="marginTop-12">
                        <OlaInput type = "password" placeholder = "Input text" className="w-100"/>
                    </div>
                </div>
                <div className = "marginTop-30 d-flex justify-content-between">
                    <CheckBox label = "Remember me" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                    <a className="ola-link" href="" data-toggle="modal" data-target="#forgotModal" data-dismiss="modal">Forgot password</a>
                </div>
                <div className = "marginTop-44">
                    <button className = "btn ola-btn-primary m-btn full-w-btn">Sign In</button>
                </div>
                <div className = "marginTop-24 d-flex justify-content-center">
                    <span className="mr-2">Don’t have an Olafic account?</span>
                    <a className="ola-link" href="" data-toggle="modal" data-target="#signupModal" data-dismiss="modal">Sign Up</a>
                </div>
            </div>
        )
    }
    renderMobilePage = () => {
        return (
            <div className="sign-page mt-5 px-0">
                <div className="title">
                    Sign In
                </div>
                <div>
                    <div className="marginTop-44">
                        Email Address
                    </div>
                    <div className="marginTop-12">
                        <OlaInput type = "text" placeholder = "Enter..." className="w-100"/>
                    </div>
                </div>
                <div>
                    <div className="marginTop-24">
                        Password
                    </div>
                    <div className="marginTop-12">
                        <OlaInput type = "password" placeholder = "Type Here..." className="w-100"/>
                    </div>
                </div>
                <button className = "marginTop-44 btn ola-btn-primary m-btn full-w-btn">Sign In</button>
                <button className = "marginTop-12 btn ola-btn-facebook w-100 text-white" onClick = {this.onClick}>
                    <img alt="..." src={assets.facebookBlack} className="text-white mr-2"/> Continue with Google
                </button>
                <button className = "marginTop-12 btn ola-btn-google w-100" onClick = {this.onClick}>
                    <img alt="..." src={assets.google} className="text-white mr-2"/> Continue with Facebook
                </button>
                <div className = "marginTop-30">
                    <Link className="ola-link" to="/forgot-password">Forgot password</Link>
                </div>
            </div>
        )
    }
    render() {
        if (!isMobile) {
            return (
                <Modal id="signinModal">
                    {this.renderWebPage()}
                </Modal>
            );
        } else {
            return this.renderMobilePage()
        }
    }
}
export default SigninPage;