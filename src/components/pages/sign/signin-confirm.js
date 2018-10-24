import React, { Component } from 'react';
import assets from '../../assets';
import {Link} from 'react-router-dom';

class SigninConfirmPage extends Component {
    handleCheckboxChange = () => {
    }
    render(){
        return (
            <div>
                <div className="sign-page signin-confirm">
                    <div className="container-fluid">
                        <div className = "row">
                            <div className = "col-3 image-block d-flex justify-content-center">
                                <img alt="..." src={assets.storyL_1}/>
                            </div>
                            <div className = "col-9">
                                <div className = "title">
                                    To continue, please confirm that you’re Vlad-Teodor.
                                </div>
                                <div className = "marginTop-12">
                                    First + Last Name
                                </div>
                            </div>
                        </div>
                        <div className = "row marginTop-44 d-flex justify-content-center">
                            <div className = "col-6">
                                <button className = "btn ola-btn-bordered s-btn w-100">Continue as John</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-options-block marginTop-24 w-100 d-flex justify-content-center">
                    <Link to="" className="ola-link">More Login Options</Link>
                </div>
            </div>
        );
    }
}
export default SigninConfirmPage;