import React, { Component } from 'react';
import assets from '../../../assets';

import OlaInput from "../../../widget/ola-input";

import {isMobile} from 'react-device-detect';

class InvitePage extends Component {

    onChangePage = (selected) => {
    }

    renderWebPage = () => {
        const who = this.props.who.capitalize();

        return (
            <div className = "invite-page marginBottom-64">
                <div className= "header text-center">
                    <img alt="..." src={assets.storyP_1} className = "photo marginTop-44"/>
                    <div className="title marginTop-20">
                        Invite Your {who}
                    </div>
                    <div className="content marginTop-12">
                        Founded in August of 2016 and based in Tottenham, Ontario, OlaFic is a trusted <br/>
                        community marketplace for businesses to list, sell deals and create value.
                    </div>
                </div>
                <div className = "contact-block">
                    <div className = "contact-info-block marginTop-24">
                        <div>
                            Email
                        </div>
                        <div className="row marginTop-12">
                            <div className="col-7">
                                <OlaInput type = "text" placeholder = "Type Here" className="w-100"/>
                            </div>
                            <div className="col-5">
                                <button className = "btn ola-btn-primary s-btn w-100">Send Invites</button>
                            </div>
                        </div>
                    </div>
                    <div className = "important-contacts-block d-flex align-items-center justify-content-start">
                        <div className="label">Import Contacts:</div>
                        <div className="contact-item d-flex align-items-center border-right border-black">
                            <img alt="..." src={assets.gmail_icon} className="float-left mr-2"/>
                            Gmail
                        </div>
                        <div className="contact-item d-flex align-items-center">
                            <img alt="..." src={assets.outlook_icon} className="float-left mr-2"/>
                            Outlook
                        </div>
                    </div>
                </div>
                <div className = "text-center marginTop-44">
                    <button className = "btn ola-btn ola-btn-bordered s-btn" data-toggle="modal" data-target="#choosefriendsModal">Invite Your {who} Later</button>
                </div>
            </div>
        );
    }

    renderMobilePage = () => {
        return (
            <div className = "invite-page marginBottom-64">
                <div className="title">
                    Import Contacts
                </div>
                <div className = "marginTop-44">
                    Email Address
                </div>
                <div className="marginTop-12">
                    <OlaInput type = "text" placeholder = "Type Here..." className="w-100"/>
                </div>
                <div className="marginTop-24">
                    <button className = "btn ola-btn ola-btn-bordered s-btn w-100">Send Invite</button>
                </div>
                <button className = "marginTop-140 btn ola-btn-facebook w-100 text-white">
                    <img alt="..." src={assets.outlook_icon} className="text-white mr-2"/> Import from Outlook
                </button>
                <button className = "marginTop-12 btn ola-btn-google w-100">
                    <img alt="..." src={assets.gmail_icon} className="mr-2"/> Import from Gmail
                </button>
            </div>
        );
    }

    render(){
        if (!isMobile) {
            return this.renderWebPage()
        } else {
            return this.renderMobilePage()
        }

    }
}
export default InvitePage;