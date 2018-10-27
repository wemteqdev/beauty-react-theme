
import React, { Component } from 'react';
import FooterHeader from './footer-header';
import FooterBody from './footer-body';

import {isMobile} from 'react-device-detect';

class Footer extends Component {
    render() {
        if (!isMobile) {
            return (
                <div className="footer border-top border-black pt-5">
                    <div className = "container">
                        <FooterHeader/>
                        <FooterBody/>
                    </div>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

export default Footer;
