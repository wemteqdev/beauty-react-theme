import React from 'react';
import assets from '../../components/assets';
import Checkbox from './checkbox';

class BookingCardItem extends React.Component {

    constructor(props) {
        super(props);
    }

    renderFriends(cardinfo){

        const friendsList = cardinfo.friends.map((fimgurl, index)=>(
            <img className = "friend-picture" src = {assets.testperson} key = {index}/>
        ));
        const renderText = ()=>{
            const fl = cardinfo.friends.length;
            if(fl > 0){
                return (
                    <div>
                        <span className = "friend-count">{fl}</span>
                        <span className = "friend-here"> friends been here</span>
                    </div>
                )
            }
        }
        
        return (
            <div className = "friends-container">
                <div>
                    {friendsList}
                    {renderText()}
                </div>
                <span className = "date">{cardinfo.date}</span>
            </div>
        )
    }

    renderDescription(cardinfo){

        const lists = cardinfo.services.map((item,index)=>{
            return (
                <li key = {index}>{item}</li>
            )
        })

        return (
            <div>
                <ul>
                    {lists}
                </ul>
            </div>
        )
    }

    handleCheckboxChange(label, list){
        console.log(label, list);
    }

    renderCheckBox(checkbox){
        if(checkbox){
            return (
                <Checkbox groups = {[]} label = "" handleCheckboxChange = {this.handleCheckboxChange}/>
            )
        }
    }

    render() {
        const cardinfo = this.props.cardinfo;
        return (
                <div className = "card-container booking-card">
                    <img className = "card-picture" src = {cardinfo.imgurl}>
                    </img>
                    <div className = "title-container">
                        <div className = "title">{cardinfo.title}</div>
                        <div className  = "ordered-check">
                            {this.renderCheckBox(this.props.checkbox)}
                        </div>
                    </div>
                    <div className = "description">
                        {this.renderDescription(cardinfo)}
                    </div>
                    <div className = "location-container">
                        <img className = "pin-drop" src = {assets.pin}></img>
                        <span className = "address">{cardinfo.location.city}, {cardinfo.location.street}</span>
                        <span className = "distance"> &#183; {cardinfo.location.distance} away</span>
                    </div>
                    <div className = "price-container">
                        <div className = "total-price">Total Price</div>${cardinfo.price}
                    </div>
                    {this.renderFriends(cardinfo)}
                </div>
        );
    }
}


export default BookingCardItem;