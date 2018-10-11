import React, { Component } from 'react';
import assets from '../../assets';
import SignUpBanner from '../../widget/signup-banner';

class ForMembers extends Component {
    render(){
        return (
            <div className = "formembers">
                <div className = "image-header" style = {{background:`url(${assets.testbanner})`}}>
                    <div className = "how-it-works-for-members">
                        <div className = "title">
                            How it works for Members
                        </div>
                        <div className = "comment">
                            Everything you need online, all in one place
                        </div>
                        <div className = "description">
                            We all use so many social media channels these days – how great would it be to have everything you need in one website? From reviews and local deals to online shopping and even searching for a new job, Olafic gives you access to many types of information and services. Set your preferences and we’ll show you the content and information that’s most helpful to you!
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className = "local-business-block">
                        <div className = "title">Find Local Businesses</div>
                        <div className = "comment">Find products and services in your hometown or when you travel –restaurants, shopping, culture, hotels, nightlife and more. This is so much more than a directory site – from this one location you can:</div>
                        <div className = "blog-list">

                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_3})`}}/>
                                <div className = "title">Find a business</div>
                                <div className = "description">
                                    Looking for the business informations, hours, or products & service. Want to know if the business has a sale going on. CityTipz is for you.
                                </div>
                            </div>

                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_3})`}}/>
                                <div className = "title">Review a business</div>
                                <div className = "description">
                                You discovered the perfect product or service and want to share it with the world. Or simply you aren’t happy with something and want the world to avoid it. Review it here.
                                </div>
                            </div>

                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_3})`}}/>
                                <div className = "title">Find Deals</div>
                                <div className = "description">
                                Leverage the power of the community with group deals from your favourite businesses
                                </div>
                            </div>

                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_3})`}}/>
                                <div className = "title">Follow Businesses</div>
                                <div className = "description">
                                Follow your favourite businesses so you’ll always know what’s happening quickly
                                </div>
                            </div>

                            <div className = "blog" style = {{width:"679px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_3})`}}/>
                                <div className = "title">Blogs & Trends</div>
                                <div className = "description">
                                Blogs and Social Trends from your favourite businesses
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className = "community-groth-result-bock">
                        <div className = "title">
                            Community growth and results
                        </div>
                        <div className = "ola-row rp-20">
                            <div className = "blog" style = {{width:"1040px"}}>
                                <div className = "image no-title" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                <div className = "description">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Why search through many websites for the products you want to buy online, when Olafic has it all in one place in our MarketPlace.<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Earn points for interacting with the site (reviews, etc.) and apply them to shopping in the MarketPlace or on available deals<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create a wish list that friends and family can see. They can also see what others have already bought you so you won’t have duplicate gifts!<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Share your shopping experiences
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "what-is-on-me-bock">
                        <div className = "title">
                            What’s in it for me?
                        </div>
                        <div className = "header-img" style = {{background:`url(${assets.testbanner})`}}/>
                        <div className = "ola-row rp-20">
                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                <div className = "title">Bookings</div>
                                <div className = "description">
                                Looking for the business informations, hours, or products & service. Want to know if the business has a sale going on. CityTipz is for you.
                                </div>
                            </div>
                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                <div className = "title">Deals</div>
                                <div className = "description">
                                Looking for the business informations, hours, or products & service. Want to know if the business has a sale going on. CityTipz is for you.
                                </div>
                            </div>
                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                <div className = "title">No Booking Fee</div>
                                <div className = "description">
                                Looking for the business informations, hours, or products & service. Want to know if the business has a sale going on. CityTipz is for you.
                                </div>
                            </div>
                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                <div className = "title">Wishlists</div>
                                <div className = "description">
                                Looking for the business informations, hours, or products & service. Want to know if the business has a sale going on. CityTipz is for you.
                                </div>
                            </div>
                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                <div className = "title">Online Calendar Management</div>
                                <div className = "description">
                                Looking for the business informations, hours, or products & service. Want to know if the business has a sale going on. CityTipz is for you.
                                </div>
                            </div>
                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                <div className = "title">Trends</div>
                                <div className = "description">
                                Looking for the business informations, hours, or products & service. Want to know if the business has a sale going on. CityTipz is for you.
                                </div>
                            </div>
                            <div className = "blog" style = {{width:"679px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                <div className = "title">Friends Recommandations</div>
                                <div className = "description">
                                Looking for the business informations, hours, or products & service. Want to know if the business has a sale going on. CityTipz is for you.
                                </div>
                            </div>
                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                <div className = "title">Cashless Online Payments</div>
                                <div className = "description">
                                Looking for the business informations, hours, or products & service. Want to know if the business has a sale going on. CityTipz is for you.
                                </div>
                            </div>
                        </div>
                    </div>
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
export default ForMembers;