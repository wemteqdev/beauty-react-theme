import React from 'react';
import assets from '../../assets';

class MarketplaceItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgurl:assets.cardpicture,
            category:"marketplace",
            kind:'spa',
            subkind:'sauna',
            rating:1,
            id:1,
            location:{
                city:"Toronto",
                street:"Ontario",
                distance:"24 KM",
            },  
            title:"Sparx Asian Beauty Product For Your Familyc",
            price:[450,300],
            expireDays:2,
            customers:3856,
            friends:[assets.testperson,assets.testperson, assets.testperson, assets.testperson, assets.testperson],
        }
    }

    renderRating(cardinfo){
        let ratings = [];
        for(var i = 0; i < 5; i ++){
            if(i < cardinfo.rating)
                ratings.push(<img className = "rating-star" src = {assets.filledstar} key = {i}/>);
            else
                ratings.push(<img className = "rating-star" src = {assets.blankstar} key = {i}/>);
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
            <img className = "friend-picture" src = {assets.testperson} key = {index}/>
        ));
        const renderText = ()=>{
            const fl = cardinfo.friends.length;
            if(fl > 0){
                return (
                    <div>
                        <span className = "friend-count">{fl}</span>
                        <span className = "friend-here"> friends bought this</span>
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
                <img className = "wishlist_add" src = {assets.wishlistadd}/>
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
                    <img className = "card-picture" src = {cardinfo.imgurl}>
                    </img>
                    <div className = "category">{category} | {kind} &#183; {subkind} </div>
                    <div className = "title-container">
                        <div className = "title">{cardinfo.title}</div>
                    </div>
                    {this.renderRating(cardinfo)}
                    <div className = "clearfix"></div>

                    <div className = "available-color-container">
                        <span className = "title">Available in 10 colors</span>
                        <span className = "ola-oval ola-bg-black"></span>
                        <span className = "ola-oval ola-bg-yellow"></span>
                        <span className = "ola-oval ola-bg-blue"></span>
                    </div>
                    <div className = "ships-days-container">
                        <span className = "title">Ships: 2 days</span>
                    </div>
                    {this.renderFriends(cardinfo)}
                </div>
        );
    }
}


export default MarketplaceItem;