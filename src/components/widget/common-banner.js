import React from 'react';
// import assets from '../assets';

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
        return (
            <div>
                <div className = "list-title">{this.props.title}</div>
                <div className = "banner-container" style = {style}>
                    <div className = "description">{this.props.children}</div>
                    <button type="button" className="btn ola-btn-primary banner-btn m-btn">{buttonTitle}</button> 
                </div>
            </div>
        );
    }
}
export default CommonBanner;