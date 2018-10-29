import React from 'react';
import assets from '../assets';
import YourTimeListItem from './image-title-des-morelink-item';

import {isMobile} from 'react-device-detect';

class YourTimeList extends React.Component {

    // constructor
    

    render() {
        let className = "your-time-list-item col-md-6 col-sm-12";
        if (isMobile) {
            className = "your-time-list-item col-12";
        }
        let scroll_x_container = "";
        if (isMobile) {
            scroll_x_container = "flex-nowrap scroll-x";
        }
        return (
            <div>
                <div className = "list-title">Your Time Belongs To You.</div>
                <div className={`row ${scroll_x_container}`}>
                    <YourTimeListItem 
                        title="Business" 
                        asset = {assets.yourTI0} 
                        readmore = "/" 
                        className = {className}
                        description = {'Receive top notch service from both pros and businesses with cashless payments. Share your experience, reviews, and ratings of your service, or simply add the service to your wishlist so that your friends can get it as a gift later.'}/>
                    <YourTimeListItem 
                        title="Business" 
                        className = {className}
                        asset = {assets.yourTI1}  
                        description = {'Receive top notch service from both pros and businesses with cashless payments. Share your experience, reviews, and ratings of your service, or simply add the service to your wishlist so that your friends can get it as a gift later.'}/>
                    <YourTimeListItem 
                        title="Business" 
                        asset = {assets.yourTI2} 
                        className = {className}
                        description = {'Receive top notch service from both pros and businesses with cashless payments. Share your experience, reviews, and ratings of your service, or simply add the service to your wishlist so that your friends can get it as a gift later.'}/>
                    <YourTimeListItem 
                        title="Business" 
                        asset = {assets.yourTI3} 
                        className = {className}
                        description = {'Receive top notch service from both pros and businesses with cashless payments. Share your experience, reviews, and ratings of your service, or simply add the service to your wishlist so that your friends can get it as a gift later.'}/>
                </div>
            </div>
        );
    }
}
export default YourTimeList;