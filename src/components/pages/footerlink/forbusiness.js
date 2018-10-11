import React, { Component } from 'react';
import assets from '../../assets';
import SignUpBanner from '../../widget/signup-banner';
import FindOutEarningForm from '../../widget/find-out-earning-form';

class ForBusiness extends Component {
    render(){
        return (
            <div className = "forbusiness">
                <div className = "image-header" style = {{background:`url(${assets.testbanner})`}}>
                    <div className = "how-it-works-for-business">
                        <div className = "title">
                            How it Works for Businesses
                        </div>
                        <div className = "comment">
                            Everything you need online, all in one place
                        </div>
                        <div className = "description">
                            Promote your business, sell online, and engage successfully with your target customers. Add your business to Olafic so your ideal customers can find you (and find out all about you) online. Whether you have an existing website or are looking to start an online presence, Olafic is the place to be.
                        </div>
                    </div>
                    <FindOutEarningForm/>

                </div>
                <div className="body">
                    <div className = "discover-benefit-block">
                        <div className = "title">Discover the Benefits of Olafic</div>
                        <div className = "comment">Sell the products and services in your hometown or out-of-town –offer deals & sales, create events, post a job or simply open your online store for FREE. This is so much more than a directory site – from this one location you can:</div>
                        <div className = "blog-list">

                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_2})`}}/>
                                <div className = "title">Business Credibility</div>
                                <div className = "description">
                                Looking for the business informations, hours, or products & service. Want to know if the business has a sale going on. Olafic is for you.
                                </div>
                            </div>

                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_3})`}}/>
                                <div className = "title">Customer Trust</div>
                                <div className = "description">
                                Leverage the power of the community with group deals from your favourite businesses
                                </div>
                            </div>

                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_1})`}}/>
                                <div className = "title">Blogs</div>
                                <div className = "description">
                                Leverage the power of the community with group deals from your favourite businesses
                                </div>
                            </div>

                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_4})`}}/>
                                <div className = "title">Free Deal listings</div>
                                <div className = "description">
                                Promote Your Business with Group Deals without Breaking the Budget. Post deals and coupons at a lower cost than other deal services. You pay only the transaction fee and enjoy all of the profits from your promotion. No profit sharing with Olafic
                                </div>
                            </div>


                            <div className = "blog" style = {{width:"679px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_3})`}}/>
                                <div className = "title">Accurate & Fair Reviews</div>
                                <div className = "description">
                                Enjoy the benefits of online reviews from your customers with the protection from unfair reviews. Our immediate arbitration option allows you to hide inappropriate reviews, opening a mediation file. Our team will contact the reviewer, verify that they did in fact visit your business, and determine whether the review is accurate and fair.
                                </div>
                            </div>

                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_3})`}}/>
                                <div className = "title">No Monthly Fee</div>
                                <div className = "description">
                                Looking for the business informations, hours, or products & service. Want to know if the business has a sale going on. Olafic is for you.
                                </div>
                            </div>

                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_3})`}}/>
                                <div className = "title">Accept all credit cards</div>
                                <div className = "description">
                                You discovered the perfect product or service and want to share it with the world. Or simply you aren’t happy with something and want the world to avoid it. Review it here.
                                </div>
                            </div>

                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_3})`}}/>
                                <div className = "title">Online Calender Management</div>
                                <div className = "description">
                                Leverage the power of the community with group deals from your favourite businesses
                                </div>
                            </div>

                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_3})`}}/>
                                <div className = "title">Import Clients list</div>
                                <div className = "description">
                                Looking for the business informations, hours, or products & service. Want to know if the business has a sale going on. Olafic is for you.
                                </div>
                            </div>

                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_3})`}}/>
                                <div className = "title">Alert Customers</div>
                                <div className = "description">
                                You discovered the perfect product or service and want to share it with the world. Or simply you aren’t happy with something and want the world to avoid it. Review it here.
                                </div>
                            </div>

                            

                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_3})`}}/>
                                <div className = "title">Invite Followers</div>
                                <div className = "description">
                                Leverage the power of the community with group deals from your favourite businesses
                                </div>
                            </div>

                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_3})`}}/>
                                <div className = "title">Create Events</div>
                                <div className = "description">
                                Looking for the business informations, hours, or products & service. Want to know if the business has a sale going on. Olafic is for you.
                                </div>
                            </div>
                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_3})`}}/>
                                <div className = "title">MarketPlace</div>
                                <div className = "description">
                                You discovered the perfect product or service and want to share it with the world. Or simply you aren’t happy with something and want the world to avoid it. Review it here.
                                </div>
                            </div>

                            <div className = "blog" style = {{width:"320px"}}>
                                <div className = "image" style = {{height:'152px', background:`url(${assets.storyP_3})`}}/>
                                <div className = "title">Job Posting Services</div>
                                <div className = "description">
                                Leverage the power of the community with group deals from your favourite businesses
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className = "local-business-block">
                        <div className = "title">
                        Local Business Listings
                        </div>
                        <div className = "ola-row rp-20">
                            <div className = "blog" style = {{width:"1040px"}}>
                                <div className = "image no-title" style = {{height:'304px', background:`url(${assets.testbanner})`}}/>
                                <div className = "description">
                                Why submit to many websites, when Olafic has it all in one place.<br/>
From submitting your business for your customers to reviews, to inviting your followers to events, and sales. Looking for that perfect resume or in need of an employee. Olafic is for you. Your business can do all these and much more in one place, without leaving the site or spending anything. Olafic is Free and will always stay Free
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
export default ForBusiness;