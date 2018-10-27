import React from 'react';
import ImageTitleDesMorePic from '../../../widget/image-title-des-morepic';
import * as dummyData from '../../../widget/dummyData';
import assets from '../../../assets';

class FeaturesPage extends React.Component{
    render(){
        return(
            <div className = "features marginBottom-64">
                <div className = "title">
                    Features
                </div>
                <div className = "comment">
                    We always strive to provide you with an innovative experience
                </div>
                <div className = "row">
                    <div className = "col-sm-12 col-md-12 marginBottom-64 code-blog">
                        <div className = "marginBottom-64" style = {{height:'304px', background:`url(${assets.testbanner})`}}/>
                    </div>
                </div>
                <div className = "features-list row">
                    <ImageTitleDesMorePic itemInfo = {dummyData.features[0]} className = "col-lg-4 col-md-6 col-sm-12"/>
                    <ImageTitleDesMorePic itemInfo = {dummyData.features[1]} className = "col-lg-4 col-md-6 col-sm-12"/>
                    <ImageTitleDesMorePic itemInfo = {dummyData.features[1]} className = "col-lg-4 col-md-6 col-sm-12"/>
                    <ImageTitleDesMorePic itemInfo = {dummyData.features[1]} className = "col-lg-4 col-md-6 col-sm-12"/>
                    <ImageTitleDesMorePic itemInfo = {dummyData.features[1]} className = "col-lg-4 col-md-6 col-sm-12"/>
                    <ImageTitleDesMorePic itemInfo = {dummyData.features[1]} className = "col-lg-4 col-md-6 col-sm-12"/>
                </div>
            </div>
        )
    }
}

export default FeaturesPage;