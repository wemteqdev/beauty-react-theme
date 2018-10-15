import React, { Component } from 'react';
import * as dummyData from '../../widget/dummyData';
import ImageWithDesList from '../../widget/imageWithDesList';
import PostBlog from '../../widget/postblog';
import SignUpBanner from '../../widget/signup-banner';
// import assets from '../../assets';

class BusinessSupport extends Component {
    render(){
        return (
            <div className = "business-support mt-5 py-4">

                <ImageWithDesList 
                        title = "The support you need"
                        comment = "Olafic is here to help both business and consumers"
                        items = {dummyData.businessCateogrys}
                        cols = {3}/>
                <div className = "post-block row">
                    <PostBlog postinfo = {dummyData.s_post1} className = "col-12"/>
                    <PostBlog postinfo = {dummyData.s_post2} className = "col-md-6 col-sm-12"/>
                    <PostBlog postinfo = {dummyData.s_post3} className = "col-md-6 col-sm-12"/>
                    <div className = "col-12">
                        <button className = "btn ola-btn-primary m-btn">Sign Up to Experience Excellence</button>
                    </div>
                </div>

                <ImageWithDesList 
                        title = "Business Benifit"
                        items = {dummyData.businessBenifit}
                        cols = {3}/>
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