
import React, { Component } from 'react';
import FooterHeader from './footer-header';
import FooterBody from './footer-body';
import FooterFooter from './footer-footer';

import {isMobile} from 'react-device-detect';

class Footer extends Component {
    render() {
        if (!isMobile) {
            return (
                <div>
                    <div className="footer border-top border-bottom border-black pt-5">
                        <div className = "container">
                            <FooterHeader/>
                            <FooterBody/>
                        </div>
                    </div>
                    <div className = "container">
                        <FooterFooter/>
                    </div>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

export default Footer;
