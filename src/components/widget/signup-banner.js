import React from 'react';
import assets from '../assets';
import { isMobile } from 'react-device-detect';

class SingnUpBanner extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        const background = assets.signupbanner;
        const style = {
            background: `url(${background})`
        }
        const {text, buttonTitle} = this.props;
        if (!isMobile) {
            return (
                <div>
                    <div className = "banner-container signup-banner" style = {style}>
                        <div className = "center-form">
                            <div className = "sign-up-des">{text}</div>
                            <button type="button" className="btn ola-btn-primary signup-banner-btn" data-toggle="modal" data-target="#signupModal">{buttonTitle}</button>     
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className = "banner-container signup-banner d-flex flex-column" style = {style}>
                        <div className = "sign-up-des mb-auto text-center">{text}</div>
                        <button type="button" className="btn ola-btn-primary signup-banner-btn w-100" data-toggle="modal" data-target="#signupModal">{buttonTitle}</button>
                    </div>
                </div>
            );
        }
    }
}
export default SingnUpBanner;