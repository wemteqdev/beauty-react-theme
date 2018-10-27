import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import assets from '../../../../assets';
import CheckBox from '../../../../widget/checkbox';
import TimeRange from '../../../../widget/datepicker/time-range';

class ProSignupStep3 extends Component {
    render(){
        let tm = {
            hour:'12',
            min:'30'
        }
        return (
            <div className = "signup marginBottom-64">
                <div className="container-fluid">
                    <div className="row">
                        <div className = "col-lg-8 col-md-12">
                            <div className="content-block">
                                <div className = "title">
                                    When do you operate?
                                </div>
                                <div className = "step-number">
                                    STEP 3
                                </div>
                                <div className = "marginTop-8 subtitle">
                                    Tell us when do you work
                                </div>
                                <div className = "d-flex flex-wrap week marginTop-24">
                                    <div className = "weekday marginBottom-14">
                                        <CheckBox label = "Monday" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                                    </div>
                                    <div className = "weekday marginBottom-14">
                                        <CheckBox label = "Tuesday" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                                    </div>
                                    <div className = "weekday marginBottom-14">
                                        <CheckBox label = "Wednesday" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                                    </div>
                                    <div className = "weekday marginBottom-14">
                                        <CheckBox label = "Thursday" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                                    </div>
                                    <div className = "weekday marginBottom-14">
                                        <CheckBox label = "Friday" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                                    </div>
                                    <div className = "weekday marginBottom-14">
                                        <CheckBox label = "Saturday" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                                    </div>
                                    <div className = "weekday marginBottom-14">
                                        <CheckBox label = "Sunday" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                                    </div>
                                </div>
                                <div className = "marginTop-50">
                                    <TimeRange time_from={tm} time_to={tm}/>
                                </div>
                                <div className = "marginTop-44 btn-finish-block">
                                    <button className = "btn ola-btn-primary m-btn w-100">Finish Registration</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 px-lg-1">
                            <div className = "comment-block marginTop-64">
                                <div>
                                    <img alt="..." src = {assets.spotlight}/>
                                </div>
                                <div className = "text marginTop-24">
                                    Do you know you can also offer on-demand service?<br/><br/>
                                    Offering customers on-demand service will not only increase your revenue, also will build loyalty. Be the first business in your area to offer this service and increase your revenue.
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
export default ProSignupStep3;