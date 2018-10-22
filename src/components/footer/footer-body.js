import React, { Component } from 'react';
import {Social} from '../widget/icons'
import { Link } from 'react-router-dom';
class FooterBody extends Component {
    render() {


        return (
            <div className = "row footer-body">
                <div className = "col-md-3 col-sm-6 col-xs-12">
                    <div className = 'countries-cities'>
                        <div className = "footer-list-title">
                            Countries
                        </div>
                        <ul className = "list-unstyled footer-list-conent">
                            <li>Canada</li>
                            <li>United State</li>
                        </ul>
                    </div>
                    <div>
                        <div className = "footer-list-title">
                            Popular Cities
                        </div>
                        <ul className = "list-unstyled footer-list-conent">
                            <li>New York</li>
                            <li>Toronto</li>
                            <li>Vancouver</li>
                            <li>Los Angeles</li>
                        </ul>
                    </div>
                </div>
                
                <div className = "col-md-3 col-sm-6 col-xs-12">
                    <div className = 'user-olafic'>
                        <div className = "footer-list-title">
                            Use OlaFic
                        </div>
                        <ul className = "list-unstyled footer-list-conent">
                            <li><Link to = "/about-olafic" className = "none-decoration">About OlaFic</Link></li>
                            <li><Link to = "/press" className = "none-decoration">Press</Link></li>
                            <li><Link to = "/stories" className = "none-decoration">Stories</Link></li>
                            <li><Link to = "/careers" className = "none-decoration">Careers</Link></li>
                            <li><Link to = "/categories" className = "none-decoration">Categories</Link></li>
                            <li><Link to = "/help" className = "none-decoration">Help</Link></li>
                            <li><Link to = "/marketplace" className = "none-decoration">Marketplace</Link></li>
                            <li><Link to = "/deals" className = "none-decoration">Deals</Link></li>
                            <li><Link to = "/trending" className = "none-decoration">Trending</Link></li>
                        </ul>
                    </div>
                </div>

                <div className = "col-md-3 col-sm-6 col-xs-12">
                    <div className = 'how-it-works'>
                        <div className = "footer-list-title">
                            How it works
                        </div>
                        <ul className = "list-unstyled footer-list-conent">
                            <li><Link to = "/advertiese" className = "none-decoration">Advertise on Olafic</Link></li>
                            <li><Link to = "/claim" className = "none-decoration">Claim Business</Link></li>
                            <li><Link to = "/support" className = "none-decoration">Business Support</Link></li>
                            <li><Link to = "/successstory" className = "none-decoration">Business Success Stories</Link></li>
                            <li><Link to = "/formembers" className = "none-decoration">For Members</Link></li>
                            <li><Link to = "/forpros" className = "none-decoration">For Pros</Link></li>
                            <li><Link to = "/forbusiness" className = "none-decoration">For Business</Link></li>
                            <li><Link to = "/codecontent" className = "none-decoration">Code of Conduct</Link></li>
                        </ul>
                    </div>
                </div>

                <div className = "col-md-3 col-sm-6 col-xs-12 d-flex justify-content-md-end">
                    <div className = 'connect-us'>
                        <div className = "footer-list-title">
                            Connect With Us
                        </div>
                        <ul className = "list-unstyled footer-list-conent">
                            <li>
                                <Link to = "/createsupport" className = "none-decoration">
                                    <Social name = "message" />
                                    Contact Support</Link></li>
                            <li>
                                <Link to = "/news_media" className = "none-decoration">
                                    <Social name = "news" />
                                    News &amp; Media</Link></li>
                            <li>
                                <a href="https://www.facebook.com/OlaFic.official/" className = "none-decoration">
                                    <Social name = "facebook" />
                                    Facebook</a></li>
                            <li>
                                <a href="https://ca.linkedin.com/company/olafic" className = "none-decoration">
                                    <Social name = "instagram" />
                                    Instragram</a></li>
                            <li>
                                <a href="https://twitter.com/OlaFic_Official" className = "none-decoration">
                                    <Social name = "twitter" />
                                    Twitter</a></li>
                            <li>
                                <a href="https://ca.linkedin.com/company/olafic" className = "none-decoration">
                                    <Social name = "linkedin" />
                                    LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default FooterBody;
