import React, { Component } from 'react';
import assets from '../../assets';
import SignUpBanner from '../../widget/signup-banner';
import FindOutEarningForm from '../../widget/find-out-earning-form';

class ForPros extends Component {
    render(){
        return (
            <div className = "forpros">

                <div className = "image-header row py-4" style = {{background:`url(${assets.testbanner})`}}>
                        <div className = "make-better-money col-lg-6 col-md-12 mr-5">
                            <div className = "title">
                            Make better money, <br/>
                            on your own time
                            </div>
                            <div className = "comment">
                            Earn up to $100 per hour doing hair, makeup, nails, or<br/> 
                            by being a personal trainer on your own schedule
                            </div>
                        </div>
                        <FindOutEarningForm/>
                </div>

                <div className="body">
                    <div className = "page-comment-block">
                        <div className = "row">
                            <div className = "col-md-4 col-sm-12">
                                <div className = "text-blog">
                                    <div className = "title">List Your Business</div>
                                    <div className = "description">We unlock every corner of the world making beauty professionals available to members anytime and anywhere.</div>
                                </div>
                            </div>
                            <div className = "col-md-4 col-sm-12">
                                <div className = "text-blog">
                                    <div className = "title">Post Deals</div>
                                    <div className = "description">
                                    We unlock every corner of the world making beauty professionals available to members anytime and anywhere.
                                    </div>
                                </div>
                            </div>
                            <div className = "col-md-4 col-sm-12">
                                <div className = "text-blog">
                                    <div className = "title">Pros with Minimum 3 Years Experience</div>
                                    <div className = "description">
                                    Working with CityTipz is flexible and rewarding, helping beauty pros meet their career and financial goals.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className = "how-come-olafic-pro">
                        <div className = "title">
                            How to become an Olafic Pro?
                        </div>

                        <div className = "pro-gruid-step">
                            <div className = "num mr-4">1</div>
                            <div className = "text-blog mr-5">
                                <div className = "title">Pros with Minimum 3 Years Experience</div>
                                <div className = "description">
                                Tell us a little about yourself and your experience. At least minimum 18 years old, so we’ll show you what’s needed for your city.
                                </div>
                            </div>
                            <div className = "img pl-4">
                                <img alt="..." src = {assets.storyP_2}/>
                            </div>
                        </div>

                        <div className = "pro-gruid-step">
                            <div className = "img">
                                <img alt="..." src = {assets.storyP_2}/>
                            </div>
                            <div className = "num ml-5">2</div>
                            <div className = "text-blog ml-4">
                                <div className = "title">Share Some Documents and References</div>
                                <div className = "description">
                                Just upload your headshot pictures, current contact info including your email and mobile number, and at least 5 client references with their email address for reference check via email.
                                </div>
                            </div>
                        </div>

                        <div className = "pro-gruid-step">
                            <div className = "num mr-4">3</div>
                            <div className = "text-blog mr-5">
                                <div className = "title">Get Approved and Go</div>
                                <div className = "description">
                                Once you’re approved to start with OlaFic as an independent contractor, we’ll provide everything you need to be a success as a pro.
                                </div>
                            </div>
                            <div className = "img pl-4">
                                <img alt="..." src = {assets.storyP_2}/>
                            </div>
                        </div>

                    </div>
                    <div className = "benefit-for-pros-block">
                            <div className = "title">
                                Benefits for Professionals
                            </div>
                            <div className = "header-img" style = {{background:`url(${assets.testbanner})`}}/>
                            <div className = "row">
                                <div className = "blog col-md-4 col-sm-12">
                                    <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                    <div className = "title">Make More Money</div>
                                    <div className = "description">
                                    We unlock every corner of the world making beauty professionals available to members anytime and anywhere.
                                    </div>
                                </div>
                                <div className = "blog col-md-4 col-sm-12">
                                    <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                    <div className = "title">Work on your own schedule</div>
                                    <div className = "description">
                                    We unlock every corner of the world making beauty professionals available to members anytime and anywhere.
                                    </div>
                                </div>
                                <div className = "blog col-md-4 col-sm-12">
                                    <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                    <div className = "title">Online Calendar Management</div>
                                    <div className = "description">
                                    Working with Olafic is flexible and rewarding, helping beauty professionals meet their career and financial goals.
                                    </div>
                                </div>
                                <div className = "blog col-md-4 col-sm-12">
                                    <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                    <div className = "title">No Monthly Fee</div>
                                    <div className = "description">
                                    Looking for the business informations, hours, or products & service. Want to know if the business has a sale going on. Olafic is for you.
                                    </div>
                                </div>
                                <div className = "blog col-md-4 col-sm-12">
                                    <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                    <div className = "title">Accept all credit cards</div>
                                    <div className = "description">
                                    We unlock every corner of the world making beauty professionals available to members anytime and anywhere.
                                    </div>
                                </div>
                                <div className = "blog col-md-4 col-sm-12">
                                    <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                    <div className = "title">Safe and Modern</div>
                                    <div className = "description">
                                    Working with Olafic is flexible and rewarding, helping beauty professionals meet their career and financial goals.
                                    </div>
                                </div>
                                <div className = "blog col-md-4 col-sm-12">
                                    <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                    <div className = "title">Invite Followers</div>
                                    <div className = "description">
                                    We unlock every corner of the world making beauty professionals available to members anytime and anywhere.
                                    </div>
                                </div>
                                <div className = "blog col-md-4 col-sm-12">
                                    <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                    <div className = "title">Alert Customers</div>
                                    <div className = "description">
                                    We unlock every corner of the world making beauty professionals available to members anytime and anywhere.
                                    </div>
                                </div>
                                <div className = "blog col-md-4 col-sm-12">
                                    <div className = "image" style = {{height:'152px', background:`url(${assets.testbanner})`}}/>
                                    <div className = "title">Import Clients list</div>
                                    <div className = "description">
                                    Working with Olafic is flexible and rewarding, helping beauty professionals meet their career and financial goals.
                                    </div>
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
        );
    }
}
export default ForPros;