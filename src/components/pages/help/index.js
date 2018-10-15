import React, { Component } from 'react';
import BookingCardItem from '../../widget/booking-card-item';
import * as dummyData from '../../widget/dummyData';
import NotifyItem from '../../widget/notify-item';
import assets from '../../assets';
import {Link} from 'react-router-dom';
import DefaultSearchBar from '../../widget/searchbox/defaultSearchBar';
import SearchTopicResult from '../../widget/search-topic-result';

class Help extends Component {

    render(){
        return (
            <div className = "help-page">
                <div className = "booking-block">
                    <div className = "title">Get help with your booking</div>
                    <div className = "booking-body row">
                        <BookingCardItem cardinfo = {dummyData.bookinginfo} checkbox = {false}/>
                        <div className = "booking-action-buttons">
                            <button className = "btn ola-btn ola-btn-bordered s-btn">View Receipt</button>
                            <button className = "btn ola-btn ola-btn-bordered s-btn">Cancel Booking</button>
                            <button className = "btn ola-btn ola-btn-bordered s-btn">Find New Deals</button>
                        </div>
                        <div className = "profile-section">
                            <div className = "profile row mb-4">
                                <div className = "col-2 text-center">
                                    <img alt="..." className = "verified" src = {assets.info_s}/>
                                </div>
                                <div className = "col-10 px-0">
                                    Your profile just shows the last name’s first character
                                </div>
                            </div>
                            <div className = "profile row mb-4">
                                <div className = "col-2 text-center">
                                    <img alt="..." className = "verified" src = {assets.info_s}/>
                                </div>
                                <div className = "col-10 px-0">
                                    Your profile just shows the last name’s first character
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "notify-list-block">
                    <NotifyItem notifyinfo = {dummyData.notifyinfo}/>
                </div>

                <div className = "choose-another-booking">
                    <Link to = "/choose_another_booking">
                        Choose another Booking
                        <span className = "ola-icon arrow-right">
                            <img alt="..." src = {assets.dropdown_arrow_medium_black}/>
                        </span>
                    </Link>
                </div>

                <div className = "suggested-topic-block">
                    <div className = "title">Suggested Topics</div>
                    <div className = "topic-search-box">
                        <DefaultSearchBar placeholder = "Search Topics"/>
                    </div>
                    <SearchTopicResult />
                </div>

                <div className = "still-help-block">
                    <div className = "title">
                        Still need help?
                    </div>
                    <div className = "description">
                        Olafic serves consumers and businesses in over ten countries, with nearly 1,000,000 businesses listings, and we’re growing every day. 
                        <br/><br/>
                        We’re always looking for energetic feedback.
                    </div>
                    <button style = {{width:'200px'}} className = 'btn ola-btn-primary m-btn' id = "contact-us-btn">Contact Us</button>
                </div>
            </div>
        );
    }
}

export default Help;