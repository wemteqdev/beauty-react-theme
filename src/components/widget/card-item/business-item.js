import React from 'react';
import assets from '../../assets';

class BusinessItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgurl:assets.cardpicture,
            category:"business",
            kind:'spa',
            subkind:'sauna',
            verified:true,
            rating:1,
            id:1,
            location:{
                city:"Toronto",
                street:"Ontario",
                distance:"24 KM",
            },
            title:"Elite Spa In Your Own Home And Beyond With Olafic",
            price:[50,100],
            customers:3856,
            friends:[assets.testperson,assets.testperson, assets.testperson, assets.testperson, assets.testperson],
            following:false,
        }
    }

    renderRating(cardinfo){
        let ratings = [];
        for(var i = 0; i < 5; i ++){
            if(i < cardinfo.rating)
                ratings.push(<img alt="..." className = "rating-star" src = {assets.filledstar} key = {i}/>);
            else
                ratings.push(<img alt="..." className = "rating-star" src = {assets.blankstar} key = {i}/>);
        }
        return (
            <div className = "rating-container">
                {ratings}
                <span>({cardinfo.customers})</span>
            </div>
        )

    }

    renderFriends(cardinfo){

        const friendsList = cardinfo.friends.map((fimgurl, index)=>(
            <img alt="..." className = "friend-picture" src = {assets.testperson} key = {index}/>
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
                <img alt="..." className = "follow" src = {(cardinfo.following)?assets.follow:""}/>
            </div>
        )
    }

    render() {
        const cardinfo = this.props.cardinfo;
        const category = this.props.cardinfo.category.capitalize();
        const kind = this.props.cardinfo.kind.toUpperCase();
        const subkind = this.props.cardinfo.subkind.toUpperCase();
        return (
                <div className = "card-container">
                    <img alt="..." className = "card-picture" src = {cardinfo.imgurl}>
                    </img>
                    <div className = "category">{category} | {kind} &#183; {subkind} </div>
                    <div className = "title-container">
                        <div className = "title">{cardinfo.title}</div>
                        <img alt="..." className = "verified" src = {(cardinfo.verified)?assets.verifiedgreen:""}/>
                    </div>
                    {this.renderRating(cardinfo)}
                    <div className = "location-container">
                        <img alt="..." className = "pin-drop" src = {assets.pin}></img>
                        <span className = "address">{cardinfo.location.city}, {cardinfo.location.street}</span>
                        <span className = "distance"> &#183; {cardinfo.location.distance} away</span>
                    </div>
                    <div className = "price-container">
                        ${cardinfo.price[0]} - ${cardinfo.price[1]}
                    </div>
                    {this.renderFriends(cardinfo)}
                </div>
        );
    }
}


export default BusinessItem;