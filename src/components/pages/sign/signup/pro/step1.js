import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import assets from '../../../../assets';
import OlaSelect from '../../../../widget/ola-select';
import OlaInput from '../../../../widget/ola-input';

class ProSignupStep1 extends Component {
    render(){
        return (
            <div className = "signup pro-signup marginBottom-64">
                <div className="container-fluid">
                    <div className="row">
                        <div className = "col-lg-8 col-md-12 pr-lg-5">
                            <div className="content-block">
                                <div className = "title">
                                    Services and Description
                                </div>
                                <div className = "step-number">
                                    STEP 1
                                </div>

                                <div className = "row marginTop-8">
                                    <div className = "col-12 subtitle">
                                        Can you tell us more about yourself?
                                    </div>
                                </div>
                                <div className = "row">
                                    <div className = "col-6">
                                        <div className="row marginTop-32">
                                            <div className = "col-12 Control-header">
                                                Intro
                                            </div>
                                            <div className = "col-12 marginTop-12">
                                                <OlaInput type = "text" placeholder = "Type Here (200 chars max)" className="w-100"/>
                                            </div>
                                        </div>
                                        <div className="row marginTop-24">
                                            <div className = "col-12 Control-header">
                                                For Booking Email *
                                            </div>
                                            <div className = "col-12 marginTop-12">
                                                <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                                            </div>
                                        </div>
                                        <div className="row marginTop-24">
                                            <div className = "col-12 Control-header">
                                                For Booking Phone *
                                            </div>
                                            <div className = "col-12 marginTop-12">
                                                <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = "row marginTop-64">
                                    <div className = "col-6 subtitle">
                                        Languages
                                    </div>
                                    <div className = "col-6 d-flex justify-content-end align-items-end">
                                        Add Language +
                                    </div>
                                </div>
                                <div className = "row">
                                    <div className = "col-6">
                                        <div className="row marginTop-24">
                                            <div className = "col-12 Control-header">
                                                First Language
                                            </div>
                                            <div className = "col-12 marginTop-12">
                                                <OlaSelect type = "text" placeholder = "English" className="w-100"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = "row marginTop-64">
                                    <div className = "col-6 subtitle">
                                        Licenses
                                    </div>
                                    <div className = "col-6 d-flex justify-content-end align-items-end">
                                        Add Licenses +
                                    </div>
                                </div>
                                <div className = "row">
                                    <div className = "col-6">
                                        <div className="row marginTop-32">
                                            <div className = "col-12 Control-header">
                                                Licenses
                                            </div>
                                            <div className = "col-12 marginTop-12">
                                                <OlaInput type = "text" placeholder = "Nail Technician" className="w-100"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = "row">
                                    <div className = "col-6">
                                        <div className="row marginTop-32">
                                            <div className = "col-12 Control-header">
                                                Licenses
                                            </div>
                                            <div className = "col-12 marginTop-12">
                                                <OlaInput type = "text" placeholder = "Nail Polisher" className="w-100"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = "row marginTop-64">
                                    <div className = "col-6 subtitle">
                                        Areas Serving
                                    </div>
                                    <div className = "col-6 d-flex justify-content-end align-items-end">
                                        Add Area +
                                    </div>
                                </div>
                                <div className = "row">
                                    <div className = "col-6">
                                        <div className="row marginTop-24">
                                            <div className = "col-12 Control-header">
                                                Areas Serving
                                            </div>
                                            <div className = "col-12 marginTop-12">
                                                <OlaInput type = "text" placeholder = "ex: New York" className="w-100"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = "row">
                                    <div className = "col-6">
                                        <div className="row marginTop-32">
                                            <div className = "col-12 Control-header">
                                                Areas Serving
                                            </div>
                                            <div className = "col-12 marginTop-12">
                                                <OlaInput type = "text" placeholder = "ex: New York" className="w-100"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = "row marginTop-64">
                                    <div className = "col-6 subtitle">
                                        Experience
                                    </div>
                                    <div className = "col-6 d-flex justify-content-end align-items-end">
                                        Add Experience +
                                    </div>
                                </div>
                                <div className = "row">
                                    <div className = "col-6">
                                        <div className="row marginTop-24">
                                            <div className = "col-12 Control-header">
                                                Business Name
                                            </div>
                                            <div className = "col-12 marginTop-12">
                                                <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                                            </div>
                                        </div>
                                        <div className="row marginTop-24">
                                            <div className = "col-7 pr-1">
                                                <div className="row">
                                                    <div className = "col-12 Control-header">
                                                        Job City
                                                    </div>
                                                    <div className = "col-12 marginTop-12">
                                                        <OlaSelect type = "text" placeholder = "Select Here" className="w-100"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className = "col-5 pl-1">
                                                <div className="row">
                                                    <div className = "col-12 Control-header">
                                                        Duration
                                                    </div>
                                                    <div className = "col-12 marginTop-12">
                                                        <OlaInput type = "text" placeholder = "1 Year" className="w-100"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row marginTop-44">
                                            <div className = "col-12 Control-header">
                                                Business Name
                                            </div>
                                            <div className = "col-12 marginTop-12">
                                                <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                                            </div>
                                        </div>
                                        <div className="row marginTop-24">
                                            <div className = "col-7 pr-1">
                                                <div className="row">
                                                    <div className = "col-12 Control-header">
                                                        Job City
                                                    </div>
                                                    <div className = "col-12 marginTop-12">
                                                        <OlaSelect type = "text" placeholder = "Select Here" className="w-100"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className = "col-5 pl-1">
                                                <div className="row">
                                                    <div className = "col-12 Control-header">
                                                        Duration
                                                    </div>
                                                    <div className = "col-12 marginTop-12">
                                                        <OlaInput type = "text" placeholder = "1 Year" className="w-100"/>
                                                    </div>
                                                </div>
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
                            <div className = "comment-block marginTop-90">
                                <div>
                                    <img alt="..." src = {assets.spotlight}/>
                                </div>
                                <div className = "text marginTop-24">
                                    Do you know featured businesses also get featured deals and they can be seen on local competition pages? Make your business featured!
                                </div>
                            </div>
                            <div className = "comment-block marginTop-74">
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
            </div>
        );
    }

    handleCheckboxChange = () => {
    }
}
export default ProSignupStep1;