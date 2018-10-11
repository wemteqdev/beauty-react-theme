import React from 'react';
import assets from '../assets';

class SingnUpBanner extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const background = assets.signupbanner;
        const style = {
            background: `url(${background})`
        }
        const {text, buttonTitle} = this.props;
        return (
            <div>
                <div className = "banner-container signup-banner" style = {style}>
                    <div className = "center-form">
                        <div className = "sign-up-des">{text}</div>
                        <button type="button" className="btn ola-btn-primary signup-banner-btn">{buttonTitle}</button>     
                    </div>
                </div>
            </div>
        );
    }
}
export default SingnUpBanner;