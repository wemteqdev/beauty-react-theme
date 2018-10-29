import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import assets from '../../../../assets';
import OlaSelect from '../../../../widget/ola-select';
import OlaInput from '../../../../widget/ola-input';
import CheckBox from '../../../../widget/checkbox';
import GoogleMapReact from 'google-map-react';

import {isMobile} from 'react-device-detect';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ProSignupStep2 extends Component {
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
                <div className="container-fluid">
                    <div className="row">
                        <div className = "col-lg-8 col-md-12">
                            <div className="content-block">
                                <div className = "title">
                                    Your Location
                                </div>
                            { !isMobile &&
                                <div>
                                    <div className = "step-number">
                                        STEP 2
                                    </div>
                                    <div className = "row marginTop-8">
                                        <div className = "col-12 subtitle">
                                            From where does your business operate?
                                        </div>
                                    </div>
                                </div>
                            }
                                <div className = "row d-flex align-items-end">
                                    <div className = "col-sm-6 col-xs-12">
                                        <div className="row marginTop-32">
                                            <div className = "col-12 Control-header">
                                                Country *
                                            </div>
                                            <div className = "col-12 marginTop-12">
                                                <OlaSelect type = "text" placeholder = "Select Here" className="w-100"/>
                                            </div>
                                        </div>
                                        <div className="row marginTop-24">
                                            <div className = "col-6 pr-1">
                                                <div className="row">
                                                    <div className = "col-12 Control-header">
                                                        State *
                                                    </div>
                                                    <div className = "col-12 marginTop-12">
                                                        <OlaSelect type = "text" placeholder = "Select Here" className="w-100"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className = "col-6 pl-1">
                                                <div className="row">
                                                    <div className = "col-12 Control-header">
                                                        Postal/Zip Code *
                                                    </div>
                                                    <div className = "col-12 marginTop-12">
                                                        <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row marginTop-24">
                                            <div className = "col-12 Control-header">
                                                City *
                                            </div>
                                            <div className = "col-12 marginTop-12">
                                                <OlaSelect type = "text" placeholder = "Select Here" className="w-100"/>
                                            </div>
                                        </div>
                                        <div className="row marginTop-24">
                                            <div className = "col-12 Control-header">
                                                Street Address *
                                            </div>
                                            <div className = "col-12 marginTop-12">
                                                <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = "col-sm-6 col-xs-12 pr-md-5 marginTop-44 google-map">
                                        <GoogleMapReact
                                            // options = {this.mapOptionsCreator}
                                            bootstrapURLKeys={{ key: 'AIzaSyD5NfkcVgbxns5Q_LAFklg3ATMbF_fOR9g' }}
                                            defaultCenter={this.state.center}
                                            defaultZoom={this.state.zoom}
                                            >
                                                <AnyReactComponent
                                                    lat={59.955413}
                                                    lng={30.337844}
                                                    text={'Kreyser Avrora'}
                                                />
                                        </GoogleMapReact>
                                    </div>
                                </div>
                            { !isMobile &&
                                <div>
                                    <div className="row marginTop-32">
                                        <div className = "col-12 Control-header">
                                            <CheckBox label = "Keep address private?" handleCheckboxChange = {this.handleCheckboxChange} groups = {[]}/>
                                        </div>
                                    </div>
                                    <div className = "marginTop-44 btn-continue-block">
                                        <button className = "btn ola-btn-primary m-btn w-100">Continue</button>
                                    </div>
                                </div>
                            }
                            </div>
                        </div>
                    { !isMobile &&
                        <div className="col-lg-4 col-md-12 px-lg-2">
                            <div className = "comment-block marginTop-64">
                                <div>
                                    <img alt="..." src = {assets.spotlight}/>
                                </div>
                                <div className = "text marginTop-24">
                                    Do you know many people search for local businesses online and their reviews before their purchase?<br/><br/>
                                    With today's customer demand, the businesses have to keep with the trend. 85% of customers make their purchase decision after they check businesses online. Be there and make the sale.
                                </div>
                            </div>
                        </div>
                    }
                    </div>
                </div>
            </div>
        );
    }

    handleCheckboxChange = () => {
    }
}
export default ProSignupStep2;