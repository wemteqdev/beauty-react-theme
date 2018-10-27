import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import assets from '../../../../assets';
import OlaSelect from '../../../../widget/ola-select';
import OlaInput from '../../../../widget/ola-input';

class BusinessSignupStep1 extends Component {
    render(){
        return (
            <div className = "signup marginBottom-64">
                <div className="row">
                    <div className = "col-lg-8 col-md-12">
                        <div className="content-block">
                            <div className = "title">
                                Let’s Get Started Listing <br/>
                                Your Business
                            </div>
                            <div className = "step-number">
                                STEP 1
                            </div>

                            <div className = "row marginTop-8">
                                <div className = "col-12 subtitle">
                                    What kind of business do you have?
                                </div>
                            </div>
                            <div className = "row">
                                <div className = "col-6">
                                    <div className="row marginTop-32">
                                        <div className = "col-12 Control-header">
                                            Business Name *
                                        </div>
                                        <div className = "col-12 marginTop-12">
                                            <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                                        </div>
                                    </div>
                                    <div className="row marginTop-24">
                                        <div className = "col-12 Control-header">
                                            Category
                                        </div>
                                        <div className = "col-12 marginTop-12">
                                            <OlaSelect type = "text" placeholder = "Select your business category" className="w-100"/>
                                        </div>
                                    </div>
                                    <div className="row marginTop-24">
                                        <div className = "col-12 Control-header">
                                            Subcategory
                                        </div>
                                        <div className = "col-12 marginTop-12">
                                            <OlaSelect type = "text" placeholder = "Select your business subcategory" className="w-100"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "marginTop-44 btn-continue-block">
                                <button className = "btn ola-btn-primary m-btn w-100">Continue</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 px-lg-2">
                        <div className = "comment-block marginTop-64">
                            <div>
                                <img alt="..." src = {assets.spotlight}/>
                            </div>
                            <div className = "text marginTop-24">
                                Do you know featured businesses also get featured deals and they can be seen on local competition pages? Make your business featured!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    handleCheckboxChange = () => {
    }
}
export default BusinessSignupStep1;