import React, { Component } from 'react';
import assets from '../../assets';
import ScrollArea from 'react-scrollbar';

class SuccessStory extends Component {
    render(){
        return (
            <div className = "success-story">
                <div className = "story-block">
                    <div className = "title">
                        Business Success stories
                    </div>
                    <div className ="comment">
                        See how Olafic has helped businesses like yours!
                    </div>
                    <div className = "story-scroller image-scroller images-scroll-area">
                        <div className = "images-scroll-content">
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                            <img className = "image-scroll-item" src = {assets.storyP_1}/>
                        </div>
                    </div>
                    
                    <div className= "story-content sr">
                        <div className = "text">
                        We live in a social media age where marketing is about more than telling a story – it’s about sharing stories and engaging with your customers and prospects. 
Olafic helps you do this in many ways through one convenient platform.<br/><br/>
One of the keys to success of our business is, interacting with our customers. Where we listen and fix their issues and concerns, and answer their questions before and after the sale. Their reviews tell us excactly what is doing great and what needs work. The citytipz customer review is detailed, where can pinpoint our issues and work on it. It takes the guessing game out and makes the business concentrate on key issues.
                        </div>
                        <div className = "image">
                            <img src = {assets.storyL_1}/>
                        </div>
                    </div>
                    <div className= "story-content sl">
                        <div className = "text">
                        We live in a social media age where marketing is about more than telling a story – it’s about sharing stories and engaging with your customers and prospects. 
Olafic helps you do this in many ways through one convenient platform.<br/><br/>
One of the keys to success of our business is, interacting with our customers. Where we listen and fix their issues and concerns, and answer their questions before and after the sale. Their reviews tell us excactly what is doing great and what needs work. The citytipz customer review is detailed, where can pinpoint our issues and work on it. It takes the guessing game out and makes the business concentrate on key issues.
                        </div>
                        <div className = "image">
                            <img src = {assets.storyL_1}/>
                        </div>
                    </div>
                </div>
                <div className = "more-story-block">
                    <div className = "title">
                        More Stories
                    </div>
                    <div className = "story-list">
                        <div className  = "ola-row rp-15">
                            <div className = "ola-col-4">
                                <div className = "more-story-item">
                                    <img src = {assets.storyLL_2}/>
                                    <div className = "description">
                                        Customers checking in online and letting their friends know where they are, has help our business grow fast.
                                    </div>
                                </div>
                            </div>
                            <div className = "ola-col-4">
                                <div className = "more-story-item">
                                    <img src = {assets.storyLL_2}/>
                                    <div className = "description">
                                        Customers checking in online and letting their friends know where they are, has help our business grow fast.
                                    </div>
                                </div>
                            </div>
                            <div className = "ola-col-4">
                                <div className = "more-story-item">
                                    <img src = {assets.storyLL_3}/>
                                    <div className = "description">
                                        Customers checking in online and letting their friends know where they are, has help our business grow fast.
                                    </div>
                                </div>
                            </div>
                            <div className = "ola-col-4">
                                <div className = "more-story-item">
                                    <img src = {assets.storyLL_2}/>
                                    <div className = "description">
                                        Customers checking in online and letting their friends know where they are, has help our business grow fast.
                                    </div>
                                </div>
                            </div>
                            <div className = "ola-col-4">
                                <div className = "more-story-item">
                                    <img src = {assets.storyLL_3}/>
                                    <div className = "description">
                                        Customers checking in online and letting their friends know where they are, has help our business grow fast.
                                    </div>
                                </div>
                            </div>
                            <div className = "ola-col-4">
                                <div className = "more-story-item">
                                    <img src = {assets.storyLL_2}/>
                                    <div className = "description">
                                        Customers checking in online and letting their friends know where they are, has help our business grow fast.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default SuccessStory;
