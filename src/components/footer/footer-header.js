import React, { Component } from 'react';
import asset from '../assets';

class FooterHeader extends Component {
    render() {
        return (
            <div className = "footer-header">
                <img alt="..." className = "footer-logo" src = {asset.logTitleSVG}/>    
                <ul className = "list-unstyled nav footer-button-groups">
                    <li>
                        <button className = "btn ola-btn-primary s-btn">List Your Business</button>
                    </li>
                    <li>
                        <button className = "btn ola-btn-primary s-btn">Become a Pro</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default FooterHeader;
