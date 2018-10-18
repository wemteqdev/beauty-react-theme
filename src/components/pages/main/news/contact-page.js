import React from 'react';
import * as dummyData from '../../../widget/dummyData';
import OlaInput from "../../../widget/ola-input";
import ContactInfo from "../../../widget/news/contact-info";

class ContactPage extends React.Component{
    render(){
        return(
            <div className = "contact">
                <div className = "title">Contact</div>
                <div className = "contacts-list row">
                    <ContactInfo contact={dummyData.contacts[0]}/>
                    <ContactInfo contact={dummyData.contacts[0]}/>
                    <ContactInfo contact={dummyData.contacts[0]}/>
                    <ContactInfo contact={dummyData.contacts[0]}/>
                    <ContactInfo contact={dummyData.contacts[0]}/>
                    <ContactInfo contact={dummyData.contacts[0]}/>
                    <ContactInfo contact={dummyData.contacts[0]}/>
                    <ContactInfo contact={dummyData.contacts[0]}/>
                </div>
                <div className = "subscribe row">
                    <div className = "title col-12">Subscribe</div>
                    <div className = "sub-title col-12">Get updates from Airbnb Newsroom</div>
                    <div className = "subscribe-form row col-md-6 col-sm-12">
                        <div className = "col-sm-8">
                            <div className = "form-control p-0">
                                <div className = "label">Location</div>
                                <OlaInput type = "text" placeholder = "Type Here..."/>
                            </div>
                        </div>
                        <div className = "mt-3 col-sm-4">
                            <button className = "btn ola-btn-primary m-btn full-w-btn">Subscribe</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ContactPage;