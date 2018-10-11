
import React, { Component } from 'react';
import FooterHeader from './footer-header';
import FooterBody from './footer-body';
import FooterFooter from './footer-footer';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className = "page-line"></div> 
                <div className = "footer-layout">
                    <FooterHeader/>
                    <FooterBody/>
                    <FooterFooter/>
                </div>
            </div>
        );
    }
}

export default Footer;
