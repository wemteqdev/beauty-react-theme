import React from 'react';
import ReviewItem from '../../../widget/review-item';
import * as dummyData from '../../../widget/dummyData';
// import SearchBarWithBorderBottom from '../../../widget/searchbox/searchbar-with-bottom-border';
// import CheckBox from '../../../widget/checkbox';
// import { connect} from 'react-redux';
// import * as searchActions from '../../../../actions/searchActions';
import OlaPagenation from '../../../widget/ola-pagenation';
import assets from '../../../assets';
import {Link} from 'react-router-dom';

import OlaInput from "../../../widget/ola-input";

class NewsPage extends React.Component{

    // constructor(props) {
    //     super(props);
    // }

    renderNavPath(path) {
        const pathhtml = path.map((item,index)=>(
            <div key={index} className = "nav-path-item">{item}</div>
        ));
        return pathhtml;
    }

    onChangePage = (selected) => {
    }

    render(){

        const path = ["Home","Blog","The Category","John Lewis Edinburg"];

        return(
            <div className = "news-page">
                <div className= "image-header" style  = {{background:`url(${assets.testbanner})`, boxSizing:'border-box'}}></div>
                <div className = "news-page-wrapper">
                    <div className = "nav-header">
                        <Link to = '/help' className = "help-page-nav-item">
                            <span className = "ola-icon arrow-left">
                                <img alt="..." src = {assets.dropdown_arrow_medium_black}/>
                            </span>
                            Back to Help
                        </Link>
                    </div>
                    <div className = "page-title">
                        John Lewis Edinburgh joins forces <br/>
                        with Airbnb to launch ‘The Perfect <br/>
                        Host’ Masterclasses<br/>
                    </div>
                    <div className = "nav-path">
                        {this.renderNavPath(path)}
                    </div>
                    <div className = "date-tags">
                        <div className = "date">
                            December 14, 2018
                        </div>
                        <span className = "ola-oval-4"></span>
                        <div className = "tags-group">
                            Tag 1, Tag 2 , Tag 3
                        </div>
                    </div>
                    <div className = "kind-subkind">
                        <span>SPA</span>
                        <span>&#183;</span>
                        <span>SAUNA</span>
                    </div>

                    <div className = "description">
                    Founded in August of 2016 and based in Tottenham, Ontario, OlaSpa is a trusted community marketplace for businesses to list, sell deals, create events, write blogs, post jobs and much more. Members can discover businesses, latest deals, upcoming events, or that job that they were looking for. Members can share their experience, follow businesses or find friends with the same taste and attend events together. Members can book spa, beauty packages, or that yoga class you were looking for around the world — online or from a mobile phone or tablet.
                    <br/><br/>
                    Whether you need a manicure & pedicure for the night, a hair salon that is open late , or a last minute facial, CityTipz connects people to unique health & beauty experiences, at any price point, in more than 38,000 cities and 12 countries. And with world-class customer service and a growing community of users, CityTipz is the easiest way for businesses to monetize their product or service and showcase it to an audience 
                    of millions.
                    </div>
                    <div className = "description-image" style = {{background:`url(${assets.testbanner})`}}>
                    </div>
                    <div className = "description">
                    Founded in August of 2016 and based in Tottenham, Ontario, OlaSpa is a trusted community marketplace for businesses to list, sell deals, create events, write blogs, post jobs and much more. Members can discover businesses, latest deals, upcoming events, or that job that they were looking for. Members can share their experience, follow businesses or find friends with the same taste and attend events together. Members can book spa, beauty packages, or that yoga class you were looking for around the world — online or from a mobile phone or tablet.
                    <br/><br/>
                    Whether you need a manicure & pedicure for the night, a hair salon that is open late , or a last minute facial, CityTipz connects people to unique health & beauty experiences, at any price point, in more than 38,000 cities and 12 countries. And with world-class customer service and a growing community of users, CityTipz is the easiest way for businesses to monetize their product or service and showcase it to an audience 
                    of millions.
                    </div>

                    <div className = "row marginBottom-64 review-block">
                        <div className = "review-header col-12 d-flex justify-content-between">
                            <div className = "title">Reviews</div>
                            <span className = "filter-icon">
                                <img alt="..." src = {assets.filterIcon}/>
                            </span>
                        </div>
                        <div className="review-comment col-md-6 col-sm-12">
                            <div className = "comment-header">
                                New Comment
                            </div>
                            <div className = "comment-content">
                                <OlaInput className = "comment-input" type = "text" placeholder = "Write Your Comment"/>
                                <div className = "comment-action d-flex justify-content-between">
                                    <div className = "comment-icons">
                                        <img alt="..." src = {assets.emoji}/>
                                        <img className="ml-4" alt="..." src = {assets.camera}/>
                                    </div>
                                    <button className ="btn ola-btn-bordered s-btn btn-w-92" onClick = {null}>Post</button>
                                </div>
                            </div>
                        </div>

                        <div className = "review-list-block col">
                            <div className = "row mb-4">
                                <ReviewItem itemInfo = {dummyData.reviews[0]} className = "col-12 my-3"/>
                                <ReviewItem itemInfo = {dummyData.reviews[1]} className = "col-12 my-3"/>
                                <div className = "col">
                                    <div className = "border-bottom"></div>
                                </div>
                            </div>

                            <OlaPagenation total = {50} current = {1} onChange = {this.onChangePage}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsPage;