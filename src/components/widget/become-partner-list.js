import React from 'react';
import assets from '../assets';
import YourTimeListItem from './image-title-des-morelink-item';

class BecomePartnerList extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <div className = "list-title">Become a Partner</div>
                <div className="row">
                    <YourTimeListItem 
                        title="List Your Business" 
                        asset = {assets.yourTI0} 
                        className = "your-time-list-item col-md-4 col-sm-12"
                        description = {'We unlock every corner of the world making beauty professionals available to members anytime and anywhere.'}/>
                    <YourTimeListItem 
                        title="Post Deals" 
                        asset = {assets.yourTI1}  
                        cols = '3'
                        className = "your-time-list-item col-md-4 col-sm-12"
                        description = {'We unlock every corner of the world making beauty professionals available to members anytime and anywhere.'}/>
                    <YourTimeListItem 
                        title="Get Bookings" 
                        asset = {assets.yourTI2} 
                        cols = '3'
                        className = "your-time-list-item col-md-4 col-sm-12"
                        description = {'We unlock every corner of the world making beauty professionals available to members anytime and anywhere.'}/>
                </div>
            </div>
        );
    }
}
export default BecomePartnerList;