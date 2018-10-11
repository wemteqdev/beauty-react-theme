import React, { Component } from 'react';
import * as dummyData from '../../widget/dummyData';
import ImageWithDesList from '../../widget/imageWithDesList';
import PostBlog from '../../widget/postblog';
import SignUpBanner from '../../widget/signup-banner';
import assets from '../../assets';

class BusinessSupport extends Component {
    render(){
        return (
            <div className = "business-support">

                <ImageWithDesList 
                        title = "The support you need"
                        comment = "Olafic is here to help both business and consumers"
                        items = {dummyData.businessCateogrys}
                        rp = {20}
                        cols = {3}
                        containerClass = {'f-b-support-block'}
                        itemClass = "startable-item"/>
                <div className = "post-block ola-row rp-20">
                    <PostBlog postinfo = {dummyData.s_post1} className = "ola-col-12"/>
                    <PostBlog postinfo = {dummyData.s_post2} className = "ola-col-6"/>
                    <PostBlog postinfo = {dummyData.s_post3} className = "ola-col-6"/>
                    <div className = "ola-col-12">
                        <button className = "btn ola-btn-primary m-btn">Sign Up to Experience Excellence</button>
                    </div>
                </div>

                <ImageWithDesList 
                        title = "Business Benifit"
                        items = {dummyData.businessBenifit}
                        rp = {20}
                        cols = {3}
                        containerClass = {'business-benifit-block'}
                        itemClass = "startable-item"/>
                <SignUpBanner 
                    text = "Start Making Money" 
                    buttonTitle = "Sign Up Today"
                    containerClass = "signup-banner-block"
                    />

            </div>
        );
    }
}
export default BusinessSupport;