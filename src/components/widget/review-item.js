import React from 'react';
import assets from '../assets';
import ReviewHeader from './review-header';

class ReviewItem extends React.Component {


    renderMorepics(pics){
        var images = pics.map((item, index)=>{
            if(index < 3){
                return(
                    <img alt="..." src = {item} className = "more-pic" key = {index}/>
                )
            } else {
                return <div key = {index}></div>
            }
        })

        var count = (<div className = "more-count" key = {pics.length}>+{pics.length - 3}</div>);
        if(pics.length > 3){
            images = images.concat(count);
        }
        return images;
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

    render() {

        const itemInfo = this.props.itemInfo;
        const className = this.props.className;

        return (
            <div className = {`${className} review-item`}>
                <ReviewHeader reviewInfo = {itemInfo}/>
                <div className = "categories">
                    {itemInfo.categories.map((category, index) => {
                        return <span className="category mr-2" key={index}>{category}</span>
                    })}
                </div>
                <div className = "content">
                    {itemInfo.content}
                </div>
                <div className = "more-pics-list">
                    {this.renderMorepics(itemInfo.pics)}
                </div>
                <div className = "comment-likes">
                    <div className = "comment-info">
                        <img alt="..." src = {assets.chat_s}/>
                        {itemInfo.comment}
                    </div>
                    <div className = "like-info">
                        <img alt="..." src = {assets.likes_s}/>
                        {itemInfo.likes}
                    </div>
                    <div className = "date">
                        {itemInfo.date}
                    </div>
                </div>
            </div>
        );
    }
}
export default ReviewItem;