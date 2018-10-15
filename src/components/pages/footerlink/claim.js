import React, { Component } from 'react';
import assets from '../../assets';
import SignUpBanner from '../../widget/signup-banner';

class Claim extends Component {
    render(){
        return (
            <div className = "claim">
                <div className = "auth-busines-block">
                    <div className = "title">
                    Authorized Business
                    </div>
                    <div className = "comment">
                    Claim your business and enjoy the benefits!
                    </div>
                    <div className = "blog-list row">
                        <div className = "blog col-md-6 col-sm-12 pr-5">
                            <div className = "image" style = {{height:'228px', background:`url(${assets.storyP_2})`}}/>
                            <div className = "title">Already Registered</div>
                            <div className = "description">
                            If you are already listed on our site, there is no need for you to register again! Once we verify your business, you will gain control over your company’s page and begin to make the most of our advertising and other online networking and promotional tools.
                            </div>
                            <button className = "sign-btn btn ola-btn-primary m-btn">Sign Up</button>
                        </div>

                        <div className = "blog col-md-6 col-sm-12 pl-5">
                            <div className = "image" style = {{height:'228px', background:`url(${assets.storyP_2})`}}/>
                            <div className = "title">Sign Up</div>
                            <div className = "description">
                            If you are new to us, you will need to sign up. There you will be asked to create an OlaSpa account, providing your email and a password. You may also sign up by connecting through our site with your social media account such as Facebook or Twitter.
                            </div>
                            <button className = "sign-btn btn ola-btn-primary m-btn">Sign Up</button>
                        </div>
                        
                        <div className = "blog col-12">
                            <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_2})`}}/>
                            <div className = "title">Claim Your Business</div>
                            <div className = "description">
                            After claiming your business on our site, our system will send us an alert that you’ve joined us! We will then confirm and cross check all information that you have provided to us. If verified, we will approve your application and grant you full access to your new business page! This process will take a maximum of 24 hours to complete, so you’ll have your profile up and running almost immediately. Notice: If we determine, or have reason to believe that you are not the business owner, we will delete your request.
                            </div>
                        </div>

                    </div>
                </div>

                <div className = "some-of-benifit-block">
                    <div className = "title">
                    Some of the Benefits of Authorized Businesses
                    </div>
                    <div className = "blog-list row">
                        <div className = "blog col-md-4 col-sm-12">
                            <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_2})`}}/>
                            <div className = "title">Authority Seal</div>
                            <div className = "description">
                            Claimed business oweners has access to authority seal, where they can share on their website with their customers.
                            </div>
                        </div>
                        <div className = "blog col-md-4 col-sm-12">
                            <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_2})`}}/>
                            <div className = "title">
                                Direct Communication
                            </div>
                            <div className = "description">
                            You can communicate with potential customer directly and answer their questions or pick up orders.
                            </div>
                        </div>
                        <div className = "blog col-md-4 col-sm-12">
                            <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_2})`}}/>
                            <div className = "title">Listing Control</div>
                            <div className = "description">
                            Change what is not accurate with your business information and update or post jobs, events, deals and more.
                            </div>
                        </div>
                    </div>
                </div>

                <div className = "signup-banner-block">
                    <SignUpBanner 
                        text = "Ready get started" 
                        buttonTitle = "Sign Up Today"
                        containerClass = "signup-banner-block"
                        />
                </div>
            </div>
        );
    }
}
export default Claim;