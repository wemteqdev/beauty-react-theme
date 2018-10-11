import React from 'react';
import assets from '../assets';
import YourTimeListItem from './image-title-des-morelink-item';

class YourTimeList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className = "list-title">Your Time Belongs To You.</div>
                <div className="ola-row rp-10">
                    <YourTimeListItem 
                        title="Business" 
                        asset = {assets.yourTI0} 
                        readmore = "/" 
                        className = "your-time-list-item"
                        cols = '2'
                        description = {'Receive top notch service from both pros and businesses with cashless payments. Share your experience, reviews, and ratings of your service, or simply add the service to your wishlist so that your friends can get it as a gift later.'}/>
                    <YourTimeListItem 
                        title="Business" 
                        className = "your-time-list-item"
                        cols = '2'
                        asset = {assets.yourTI1}  
                        description = {'Receive top notch service from both pros and businesses with cashless payments. Share your experience, reviews, and ratings of your service, or simply add the service to your wishlist so that your friends can get it as a gift later.'}/>
                    <YourTimeListItem 
                        title="Business" 
                        asset = {assets.yourTI2} 
                        className = "your-time-list-item"
                        cols = '2'
                        description = {'Receive top notch service from both pros and businesses with cashless payments. Share your experience, reviews, and ratings of your service, or simply add the service to your wishlist so that your friends can get it as a gift later.'}/>
                    <YourTimeListItem 
                        title="Business" 
                        asset = {assets.yourTI3} 
                        className = "your-time-list-item"
                        cols = '2'
                        description = {'Receive top notch service from both pros and businesses with cashless payments. Share your experience, reviews, and ratings of your service, or simply add the service to your wishlist so that your friends can get it as a gift later.'}/>
                </div>
            </div>
        );
    }
}
export default YourTimeList;