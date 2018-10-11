import React, { Component } from 'react';
import BookingCardItem from '../../widget/booking-card-item';
import * as dummyData from '../../widget/dummyData';
import NotifyItem from '../../widget/notify-item';
import SubmitIssueForm from '../../widget/Submit-issue-form';
import assets from '../../assets';
import {Link} from 'react-router-dom';


class HelpDetails extends Component {

    render(){
        return (
            <div className = "help-details">
                <div className = "nav-header">
                    <Link to = '/help' className = "help-page-nav-item">
                        <span className = "ola-icon arrow-left">
                            <img src = {assets.dropdown_arrow_medium_black}/>
                        </span>
                        Back to Help
                    </Link>
                </div>
                <div className = "detail-block">
                    <div className = "title">
                        I Forgot Password
                    </div>
                    <div className = "description">
                    If you forget your password, visit the link below to reset. You'll need to enter your email address associated with your OlaFic account. You'll receive an email in a few minutes. This email includes a link to reset your password. The link can only be used once. If you do not open the link within 10 minutes, start over to receive a new link. It's good practice to create a unique password for OlaFic. Be careful not to share your password in emails or other communication. OlaFic support will never ask you for your password. If you are unable to reset your password or access your account, please get in touch with us in the form below with subject line "My password reset link isn't working".
                    </div>
                </div>
                <div className = "submit-issue-form-bock">
                    <div className = "title">Still need help?</div>
                    <SubmitIssueForm/>
                </div>
            </div>
        );
    }
}

export default HelpDetails;