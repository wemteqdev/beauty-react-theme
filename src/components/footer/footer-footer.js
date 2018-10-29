import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {isMobile} from 'react-device-detect';

import SigninPage from '../pages/sign/signin';
import SignupPage from '../pages/sign/signup';
import ResetPasswordPage from '../pages/sign/reset-password';
import ChooseFriendsPage from '../pages/sign/signup/choose-friends';

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
                { !isMobile &&
                    <div>
                        <SigninPage/>
                        <SignupPage/>
                        <ResetPasswordPage/>
                        <ChooseFriendsPage/>
                    </div>
                }
            </div>
        );
    }
}

export default FooterFooter;
