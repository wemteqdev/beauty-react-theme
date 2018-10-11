import React, { Component } from 'react';
import assets from '../../assets';
class AboutUs extends Component {
    render(){
        return (
            <div className = "aboutus">
                <div className = 'title'>About Us</div>
                <div className = "body">
                    <div className = "description">
                    Founded in August of 2016 and based in Tottenham, Ontario, OlaSpa is a trusted community marketplace for businesses to list, sell deals, create events, write blogs, post jobs and much more. Members can discover businesses, latest deals, upcoming events, or that job that they were looking for. Members can share their experience, follow businesses or find friends with the same taste and attend events together. Members can book spa, beauty packages, or that yoga class you were looking for around the world — online or from a mobile phone or tablet.
                    <br/>
                    <br/>
Whether you need a manicure & pedicure for the night, a hair salon that is open late , or a last minute facial, CityTipz connects people to unique health & beauty experiences, at any price point, in more than 38,000 cities and 12 countries. And with world-class customer service and a growing community of users, CityTipz is the easiest way for businesses to monetize their product or service and showcase it to an audience of millions.
                    </div>
                    <div className = "right-side">
                        <div className = "country-city-list ola-row">
                            <div className = "countries ola-col-4">
                                <div className = "title">countries</div>
                                <div className = "numbers">2</div>
                            </div>
                            <div className = "cities ola-col-4">
                                <div className = "title">Cities</div>
                                <div className = "numbers">38,8000+</div>
                            </div>
                            <div className = "lists ola-col-4">
                                <div className = "title">Listings</div>
                                <div className = "numbers">12,000,000</div>
                            </div>
                        </div>
                        <div className = "img-section">
                            <img src = {assets.yourTI0}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AboutUs;