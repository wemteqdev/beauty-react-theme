import React from 'react';

class LeftTextRightImageBanner extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        const {asset, buttonTitle, title, text}  = this.props;

        return (
            <div className = "container mb-lg-5 left-text-right-image-banner">
                <div className = "banner-header">{title}</div>
                <div className = "row">
                    <div className = "col-md-8 col-sm-12">
                        <div className = "text marginBottom-64 mr-5 pr-5">{text}</div>
                        <button type="button" className="btn ola-btn-primary banner-btn m-btn">{buttonTitle}</button>     
                    </div>
                    <div className = "col-md-4 col-sm-12">
                        <img alt="..." src = {asset} className="w-100"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default LeftTextRightImageBanner;