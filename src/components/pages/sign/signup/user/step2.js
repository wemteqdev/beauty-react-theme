import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import assets from '../../../../assets';
import OlaSelect from '../../../../widget/ola-select';

class UserSignupStep2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 45,
                lng: -73
            },
            zoom: 11
        }
    }
    render(){
        return (
            <div className = "signup marginBottom-64">
                <div className="row">
                    <div className = "col-lg-8 col-md-12">
                        <div className="content-block">
                            <div className = "title">
                                Let us customize your <br/>experience
                            </div>
                            <div className = "step-number">
                                STEP 2
                            </div>

                            <div className = "row marginTop-8">
                                <div className = "col-12 Where-do-you-live">
                                    What kind of services do you like?
                                </div>
                            </div>
                            <div className = "row d-flex align-items-end">
                                <div className = "col-6">
                                    <div className="row marginTop-32">
                                        <div className = "col-12 Control-header">
                                            Services
                                        </div>
                                        <div className = "col-12 marginTop-12">
                                            <OlaSelect type = "text" placeholder = "Select Here" className="w-100"/>
                                        </div>
                                    </div>
                                    <div className="row marginTop-24">
                                        <div className = "col-12 Control-header">
                                            Services
                                        </div>
                                        <div className = "col-12 marginTop-12">
                                            <OlaSelect type = "text" placeholder = "Select Here" className="w-100"/>
                                        </div>
                                    </div>
                                    <div className="row marginTop-24">
                                        <div className = "col-12 Control-header">
                                            Services
                                        </div>
                                        <div className = "col-12 marginTop-12">
                                            <OlaSelect type = "text" placeholder = "Select Here" className="w-100"/>
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
                                Do you know you can book online and save?<br/><br/>
                                Now you can book online, buy deals all in 1 place, and that place is here. List the services you looking for and allow local businesses & pros to provide you better deals and services. This will allow you to choose better & cheaper service both in your home or at business location.
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
export default UserSignupStep2;