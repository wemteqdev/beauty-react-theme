import React from 'react';

const ContactInfo = (props) => {

    const {contact} = props;

    return (
        <div className = "contact-info col-md-3 col-sm-6 col-xs-12">
            <div className = "country">
                {contact.country}
            </div>
            <div className = "contents">
                <div className = "content">
                    <div className = "detail">{contact.contents[0].detail}</div>
                    <a className = "link" href="">{contact.contents[0].link}</a>
                </div>
                <div className = "content">
                    <div className = "detail">{contact.contents[0].detail}</div>
                    <a className = "link" href="">{contact.contents[0].link}</a>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;