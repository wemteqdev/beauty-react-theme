import React, { Component } from 'react';
import assets from '../../assets';
import OlaInput from "../../widget/ola-input";
import CheckBox from '../../widget/checkbox';
import {Link} from 'react-router-dom';

import Modal from '../modal';

class SigninPage extends Component {
    handleCheckboxChange = () => {
    }
    render() {
        return (
            <Modal id="signinModal">
                <div className="sign-page">
                    <div className="">
                        <div className="">
                            <button className = "btn ola-btn-facebook w-100 text-white" onClick = {this.onClick}>
                                <img alt="..." src={assets.facebookBlack} className="text-white mr-2"/> Continue with Google
                            </button>
                        </div>
                        <div className="marginTop-12">
                            <button className = "btn ola-btn-google w-100" onClick = {this.onClick}>
                                <img alt="..." src={assets.google} className="text-white mr-2"/> Continue with Facebook
                            </button>
                        </div>
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
                            <Link to="/forgot-password" className="ola-link">Forgot password</Link>
                        </div>
                        <div className = "marginTop-44">
                            <button className = "btn ola-btn-primary m-btn full-w-btn">Sign In</button>
                        </div>
                        <div className = "marginTop-24 d-flex justify-content-center">
                            <span className="mr-2">Don’t have an Olafic account?</span>
                            <a className="ola-link" href="" data-toggle="modal" data-target="#signupModal" data-dismiss="modal">Sign Up</a>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}
export default SigninPage;