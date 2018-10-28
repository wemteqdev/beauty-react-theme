import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import SigninPage from '../pages/sign/signin';
import SignupPage from '../pages/sign/signup';

class FooterFooter extends Component {
    render() {
        return (
            <div className = "border-top border-black">
                <div className  ="footer-footer container">
                    <div className = "site-mark">© 2018 xDefine Corporation</div>
                    <div className = "site-terms-service">
                        <Link to = "/terms" className  ="font-black">Privacy :: Terms</Link>
                    </div>
                </div>
                <SigninPage/>
                <SignupPage/>
            </div>
        );
    }
}

export default FooterFooter;
