import React, { Component } from 'react';
import * as dummyData from '../../widget/dummyData';
import ImageWithDesList from '../../widget/imageWithDesList';
import MastImageSubImageList from '../../widget/master-sub-image-list';
import LeftTextRightImageBanner from '../../widget/left-text-right-image-banner';
import SignUpBanner from '../../widget/signup-banner';
import assets from '../../assets';


class Advertiese extends Component {
    render(){
        return (
            <div className = "mt-5 py-4">
                <ImageWithDesList 
                    title = "Advertising that works"
                    comment = "Market to customers that actually want your product"
                    items = {dummyData.activeAdvertise}
                    cols = {2}/>
                <MastImageSubImageList
                    title = "Community growth and results"
                    mainitem = {dummyData.comunitygrowth.main}
                    subitems = {dummyData.comunitygrowth.sub}
                    containerClass = {'community-result-bock'}/>

                <LeftTextRightImageBanner 
                    title = "Business Submission"
                    text = "First and foremost, joining our team means your business’ name will be added to our list of valued and searchable partners. This is included for both FREE and PREMIUM package holders. All business ads will be geo-tagged, allowing those closest to you to receive your business’ information, as well as be visible to those searching your location. Your audience will be even more targeted as our users set their preferred categories, and keywords so those seeing your ad are the people most likely to be interested in what you offer."
                    buttonTitle = 'Join Today'
                    containerClass = {'ad-bussiness-submission-block'}
                    asset = {assets.yourTI3}
                />

                <ImageWithDesList 
                    title = "It's easy to get started"
                    items = {dummyData.startableList}
                    cols = {3}/>
                <SignUpBanner text = "Advertise on Olafic" buttonTitle = "Sign Up Today"/>
            </div>

        );
    }
}
export default Advertiese;