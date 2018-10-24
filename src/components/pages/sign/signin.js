import React, { Component } from 'react';
import assets from '../../assets';
import OlaInput from "../../widget/ola-input";
import CheckBox from '../../widget/checkbox';
import {Link} from 'react-router-dom';

class SigninPage extends Component {
    handleCheckboxChange = () => {
    }
    render(){
        return (
            <div className="sign-page">
                <div className="close">
                    <img alt="..." src={assets.action_X_black_s}/>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <button className = "btn ola-btn-facebook w-100 text-white" onClick = {this.onClick}>
                            <img alt="..." src={assets.facebookBlack} className="text-white mr-2"/> Continue with Google
                        </button>
                    </div>
                    <div className="row marginTop-12">
                        <button className = "btn ola-btn-google w-100" onClick = {this.onClick}>
                            <img alt="..." src={assets.google} className="text-white mr-2"/> Continue with Facebook
                        </button>
                    </div>
                    <div className="row marginTop-12 d-flex align-items-center">
                        <div className="separate-bar"></div>
                        <div className="or">or</div>
                        <div className="separate-bar"></div>
                    </div>
                    <div>
                        <div className="row marginTop-24">
                            Email
                        </div>
                        <div className="row marginTop-12">
                            <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                        </div>
                    </div>
                    <div>
                        <div className="row marginTop-24">
                            Password
                        </div>
                        <div className="row marginTop-12">
                            <OlaInput type = "password" placeholder = "Input text" className="w-100"/>
                        </div>
                    </div>
                    <div className = "row marginTop-30 d-flex justify-content-between">
                        <CheckBox label = "Remember me" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                        <Link to="/forgot-password" className="ola-link">Forgot password</Link>
                    </div>
                    <div className = "row marginTop-44">
                        <button className = "btn ola-btn-primary m-btn full-w-btn">Sign In</button>
                    </div>
                    <div className = "row marginTop-24 d-flex justify-content-center">
                        Don’t have an Olafic account?
                        <Link to="/signup" className="ola-link ml-2">Sign Up</Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default SigninPage;