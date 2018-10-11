import React, { Component } from 'react';
import BookingCardItem from '../../widget/booking-card-item';
import * as dummyData from '../../widget/dummyData';
import NotifyItem from '../../widget/notify-item';
import assets from '../../assets';
import {Link} from 'react-router-dom';
import TreeMenu from '../../widget/tree-menu';


class HelpTopic extends Component {

    render(){
        return (
            <div className = "help-topic">
                <div className = "nav-header">
                    <Link to = '/help' className = "help-page-nav-item">
                        <span className = "ola-icon arrow-left">
                            <img src = {assets.dropdown_arrow_medium_black}/>
                        </span>
                        Back to Help
                    </Link>
                </div>

                <div className = "help-topic-wrapper">
                    <div className = "help-topic-menu">
                        <div className = "title">Help Topics</div>
                        <TreeMenu menu = {dummyData.topicmenu}/>
                    </div>
                    <div className = "help-topic-content">
                        <div className = "block-h">
                            <Link className = "title" to = "/help-details">I Forgot my Password</Link>
                            <div className = "description">
                                If you forget your password, visit the link below to reset. You'll need to enter your email address associated with your OlaFic account. You'll receive an email in a few minutes. This email includes a link to reset your password. The link can only be used once. 
                            </div>
                        </div>
                        <div className = "block-b">
                            <div className = "title">I Forgot my Password</div>
                            <div className = "description">
                                If you forget your password, visit the link below to reset. You'll need to enter your email address associated with your OlaFic account. You'll receive an email in a few minutes. This email includes a link to reset your password. The link can only be used once. 
                            </div>
                        </div>
                        <div className = "block-b">
                            <div className = "title">I Forgot my Password</div>
                            <div className = "description">
                                If you forget your password, visit the link below to reset. You'll need to enter your email address associated with your OlaFic account. You'll receive an email in a few minutes. This email includes a link to reset your password. The link can only be used once. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "give-feedback-block">
                    <Link to = "/feedback">Give Feedback</Link>
                </div>
                
            </div>
        );
    }
}

export default HelpTopic;