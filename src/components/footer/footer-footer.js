import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FooterFooter extends Component {
    render() {
        return (
            <div>
                <div className = "page-line"></div>
                <div className  ="footer-footer">
                    <div className = "site-mark">© 2018 xDefine Corporation</div>
                    <div className = "site-terms-service">
                        <Link to = "/terms" className  ="font-black">Privacy :: Terms</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterFooter;
