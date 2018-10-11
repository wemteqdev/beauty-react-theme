import React from 'react';

class LeftTextRightImageBanner extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {asset, buttonTitle, title, text,containerClass}  = this.props;

        return (
            <div className = {`left-text-right-image-banner ${containerClass}`}>
                <div className = "banner-header">{title}</div>
                <div className = "banner-body">
                    <div className = "left-side">
                        <div className = "text">{text}</div>
                        <button type="button" className="btn ola-btn-primary banner-btn m-btn">{buttonTitle}</button>     
                    </div>
                    <div className = "right-side">
                        <img src = {asset}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default LeftTextRightImageBanner;