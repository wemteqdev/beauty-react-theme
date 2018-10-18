import React, { Component } from 'react';
import assets from '../assets';

class ReviewHeader extends Component {
    renderRating(reviewInfo){
        let ratings = [];
        for(var i = 0; i < 5; i ++){
            if(i < reviewInfo.rating)
                ratings.push(<img alt="..." className = "rating-star" src = {assets.filledstar} key = {i}/>);
            else
                ratings.push(<img alt="..." className = "rating-star" src = {assets.blankstar} key = {i}/>);
        }
        return (
            <div className = "rating-container">
                {ratings}
                <span>({reviewInfo.customers})</span>
            </div>
        )

    }
    render(){
        const {reviewInfo} = this.props;
        return (
            <div className = "review-header-container w-100">
                <img alt="..." className = "img-circle review-img" src = {reviewInfo.asset}/>
                <div className = "review-content">
                    <div className = "title">{reviewInfo.title}</div>
                    {this.renderRating(reviewInfo)}
                </div>
                <img alt="..." className = "img-more ml-auto" src = {assets.more}/>
            </div>
        );
    }
}
export default ReviewHeader;