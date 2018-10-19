import React from 'react';
// import assets from '../assets';

import {isMobile} from 'react-device-detect';

class CommonBanner extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        // const {description} = this.props;
        const {buttonTitle} = this.props;
        const {background} = this.props;
        const style = {
            background: `url(${background})`
        }
        if (!isMobile) {
            return (
                <div>
                    <div className = "list-title">{this.props.title}</div>
                    <div className = "banner-container" style = {style}>
                        <div className = "description">{this.props.children}</div>
                        <button type="button" className="btn ola-btn-primary banner-btn m-btn">{buttonTitle}</button> 
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <div className = "list-title">{this.props.title}</div>
                    <div className = "description">{this.props.children}</div>
                    <div className = "banner-container mt-3" style = {style}>
                    </div>
                    <button type="button" className="btn ola-btn-primary banner-btn m-btn w-100 mt-2">{buttonTitle}</button> 
                </div>
            );
        }
    }
}
export default CommonBanner;