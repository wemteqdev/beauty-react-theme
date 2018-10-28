import React, { Component } from 'react';
import assets from '../../assets';
import OlaInput from "../../widget/ola-input";
import CheckBox from '../../widget/checkbox';
import {Link} from 'react-router-dom';
import Modal from '../modal';

class SignupPage extends Component {
    handleCheckboxChange = () => {
    }
    render(){
        return (
            <Modal id="signupModal">
                <div className="sign-page">
                    <button className = "btn ola-btn-facebook w-100 text-white" onClick = {this.onClick}>
                        <img alt="..." src={assets.facebookBlack} className="text-white mr-2"/> Sign Up with Facebook
                    </button>
                    <button className = "marginTop-12 btn ola-btn-google w-100" onClick = {this.onClick}>
                        <img alt="..." src={assets.google} className="text-white mr-2"/> Sign Up with Google
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
                            First Name
                        </div>
                        <div className="marginTop-12">
                            <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                        </div>
                    </div>
                    <div>
                        <div className="marginTop-24">
                            Last Name
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
                    <div className="marginTop-12 security-warning-block">
                        <div className="security-warning">
                            Password Security: Low
                        </div>
                    </div>
                    <div>
                        <div className="marginTop-12">
                            Repeat Password
                        </div>
                        <div className="marginTop-12">
                            <OlaInput type = "password" placeholder = "Input text" className="w-100"/>
                        </div>
                    </div>
                    <div>
                        <div className="marginTop-24">
                            Phone Number
                        </div>
                        <div className="marginTop-12">
                            <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                        </div>
                    </div>
                    <div className="caption marginTop-12">
                        To sign up, you must be 18 or older. Other people won’t see your birthday.
                    </div>
                    <div className = "marginTop-30 d-flex justify-content-between">
                        <CheckBox label = "By checking the box I agree to" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                    </div>
                    <div className = "marginTop-6 term-policy d-flex justify-content-end">
                        <Link to="" className="ola-link">Terms & Conditions</Link>
                        &nbsp;and the&nbsp;
                        <Link to="" className="ola-link">Privacy Policy</Link>
                    </div>
                    <div className = "marginTop-24">
                        <button className = "btn ola-btn-primary m-btn full-w-btn">Sign Up Now</button>
                    </div>
                    <div className = "marginTop-24 d-flex justify-content-center">
                        Already have an Olafic account?
                        <Link to="/signin" className="ola-link ml-2">Sign In</Link>
                    </div>
                </div>
            </Modal>
        );
    }
}
export default SignupPage;