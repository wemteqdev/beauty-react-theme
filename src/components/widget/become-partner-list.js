import React from 'react';
import assets from '../assets';
import YourTimeListItem from './image-title-des-morelink-item';

import {isMobile} from 'react-device-detect';

class BecomePartnerList extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        let className = "your-time-list-item col-md-4 col-sm-12";
        if (isMobile) {
            className = "your-time-list-item col-12";
        }
        let flex_nowrap = "";
        if (isMobile) {
            flex_nowrap = "flex-nowrap";
        }
        return (
            <div>
                <div className = "list-title">Become a Partner</div>
                <div className={`row ${flex_nowrap}`}>
                    <YourTimeListItem 
                        title="List Your Business" 
                        asset = {assets.yourTI0} 
                        className = {className}
                        description = {'We unlock every corner of the world making beauty professionals available to members anytime and anywhere.'}/>
                    <YourTimeListItem 
                        title="Post Deals" 
                        asset = {assets.yourTI1}  
                        cols = '3'
                        className = {className}
                        description = {'We unlock every corner of the world making beauty professionals available to members anytime and anywhere.'}/>
                    <YourTimeListItem 
                        title="Get Bookings" 
                        asset = {assets.yourTI2} 
                        cols = '3'
                        className = {className}
                        description = {'We unlock every corner of the world making beauty professionals available to members anytime and anywhere.'}/>
                </div>
            </div>
        );
    }
}
export default BecomePartnerList;