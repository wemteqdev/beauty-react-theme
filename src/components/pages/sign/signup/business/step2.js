import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import assets from '../../../../assets';
import OlaInput from '../../../../widget/ola-input';
import CheckBox from '../../../../widget/checkbox';
import OlaTabButton from '../../../../widget/ola-tagbutton';

class BusinessSignupStep2 extends Component {
    render(){
        return (
            <div className = "signup marginBottom-64">
                <div className="row">
                    <div className = "col-lg-8 col-md-12">
                        <div className="content-block">
                            <div className = "title">
                                Business Contact and Description
                            </div>
                            <div className = "step-number">
                                STEP 2
                            </div>

                            <div className = "subtitle marginTop-8">
                                Can you tell us more about your business?
                            </div>
                            <div className = "row">
                                <div className = "col-6">
                                    <div className="row marginTop-32">
                                        <div className = "col-12 Control-header">
                                            Contact Person *
                                        </div>
                                        <div className = "col-12 marginTop-12">
                                            <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                                        </div>
                                    </div>
                                    <div className="row marginTop-32">
                                        <div className = "col-12 Control-header">
                                            Business Email *
                                        </div>
                                        <div className = "col-12 marginTop-12">
                                            <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                                        </div>
                                    </div>
                                    <div className="row marginTop-32">
                                        <div className = "col-12 Control-header">
                                            Business Phone *
                                        </div>
                                        <div className = "col-12 marginTop-12">
                                            <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                                        </div>
                                    </div>
                                    <div className="marginTop-40">
                                        <CheckBox label = "Are you the Business Owner/Manager?" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                                    </div>
                                </div>
                            </div>
                            <div className = "subtitle marginTop-70">
                                Business Details
                            </div>
                            <div className = "row">
                                <div className = "col-6">
                                    <div className="row marginTop-24">
                                        <div className = "col-12 Control-header">
                                            Business Intro
                                        </div>
                                        <div className = "col-12 marginTop-12">
                                            <OlaInput type = "text" placeholder = "Type Here (200 chars max)" className="w-100"/>
                                        </div>
                                    </div>
                                    <div className="row marginTop-32">
                                        <div className = "col-12 Control-header">
                                            Keywords *
                                        </div>
                                        <div className = "col-12 marginTop-12">
                                            <OlaInput type = "text" placeholder = "Type Here (max 10)" className="w-100"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "row marginTop-24">
                                <div className = "col-8 d-flex flex-wrap">
                                    <OlaTabButton label="SPA" className="marginTop-8 marginRight-12"/>
                                    <OlaTabButton label="SAUNA" className="marginTop-8 marginRight-12"/>
                                    <OlaTabButton label="SPA" className="marginTop-8 marginRight-12"/>
                                    <OlaTabButton label="SAUNA" className="marginTop-8 marginRight-12"/>
                                    <OlaTabButton label="SAUNA" className="marginTop-8 marginRight-12"/>
                                    <OlaTabButton label="SPA" className="marginTop-8 marginRight-12"/>
                                    <OlaTabButton label="SAUNA" className="marginTop-8 marginRight-12"/>
                                    <OlaTabButton label="SPA" className="marginTop-8 marginRight-12"/>
                                    <OlaTabButton label="SAUNA" className="marginTop-8 marginRight-12"/>
                                </div>
                            </div>
                            <div className = "marginTop-44 btn-continue-block">
                                <button className = "btn ola-btn-primary m-btn w-100">Continue</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 px-lg-1">
                        <div className = "comment-block marginTop-64">
                            <div>
                                <img alt="..." src = {assets.spotlight}/>
                            </div>
                            <div className = "text marginTop-24">
                                Making your business featured will increase you brand exposure more locally and also increase the amount of booking and sale. This gives you the chane to promote your business locally and be seen if the users are on your competition's page.Making your business featured will increase you brand exposure more locally and also increase the amount of booking and sale. This gives you the chane to promote your business locally and be seen if the users are on your competition's page.
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
export default BusinessSignupStep2;