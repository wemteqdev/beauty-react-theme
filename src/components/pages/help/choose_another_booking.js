import React, { Component } from 'react';
import BookingCardItem from '../../widget/booking-card-item';
import * as dummyData from '../../widget/dummyData';
import NotifyItem from '../../widget/notify-item';
import assets from '../../assets';
import {Link} from 'react-router-dom';

class ChooseAnotherBooking extends Component {

    render(){
        return (
            <div className = "choose-booking-page">
                <div className = "nav-header">
                    <Link to = '/help' className = "help-page-nav-item">
                        <span className = "ola-icon arrow-left">
                            <img src = {assets.dropdown_arrow_medium_black}/>
                        </span>
                        Back to My Blog
                    </Link>
                </div>
                <div className = "order-list-block">
                    <div className = "title">Which Order?</div>
                    <div className = "booking-body ola-row  rp-22">
                        <div className = "ola-col-4">
                            <BookingCardItem cardinfo = {dummyData.bookinginfo} checkbox = {true}/>
                        </div>
                        <div className = "ola-col-4">
                            <BookingCardItem cardinfo = {dummyData.bookinginfo} checkbox = {true}/>
                        </div>
                        <div className = "ola-col-4">
                            <BookingCardItem cardinfo = {dummyData.bookinginfo} checkbox = {true}/>
                        </div>
                        <div className = "ola-col-4">
                            <BookingCardItem cardinfo = {dummyData.bookinginfo} checkbox = {true}/>
                        </div>
                        <div className = "ola-col-4">
                            <BookingCardItem cardinfo = {dummyData.bookinginfo} checkbox = {true}/>
                        </div>
                        <div className = "ola-col-4">
                            <BookingCardItem cardinfo = {dummyData.bookinginfo} checkbox = {true}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChooseAnotherBooking;