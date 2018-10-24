import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import assets from '../../../assets';
class SignupStep1 extends Component {
    render(){
        return (
            <div className = "footer-careers mb-5">
                <div className="row">
                    <div className = "col-lg-6 col-md-12">
                        <div className = "title">
                            SignupStep1 that you love
                        </div>
                        <div className = "comment">
                            Want to be part of a great team?
                        </div>
                        <div className = "description block_1">
                            <div className = "header">
                                Building something big together
                            </div>
                            <div className = "body">
                                CityTipz serves consumers and businesses in over ten countries, with nearly 1,000,000 businesses listings, and we’re growing every day. We’re always looking for energetic people to join our team and help us to provide better service and more amenities to the CityTipz community.
                            </div>
                        </div>

                        <div className = "description block_2">
                            <div className = "header">
                            Current Open Positions
                            </div>
                            <div className = "body">
                                <div className = "body-text">
                                Submit your application today. We’re hiring in the following fields:
                                </div>
                                <div className = "hiring-cateogry">
                                    <div className = "item">
                                        <div>Software Engineering</div>
                                        <div><Link to = "/"> 4 Open Position</Link></div>
                                    </div>
                                    <div className = "item">
                                        <div>Web Development</div>
                                        <div><Link to = "/"> 4 Open Position</Link></div>
                                        
                                    </div>
                                    <div className = "item">
                                        <div>App Development</div>
                                        <div><Link to = "/"> 4 Open Position</Link></div>
                                    </div>
                                    <div className = "item">
                                        <div>Data Management & Clustering</div>
                                        <div><Link to = "/"> 4 Open Position</Link></div>
                                    </div>
                                    <div className = "item">
                                        <div>Cloud Design & Management</div>
                                        <div><Link to = "/"> 4 Open Position</Link></div>
                                    </div>
                                    <div className = "item">
                                        <div>Marketing & Advertising</div>
                                        <div><Link to = "/"> 4 Open Position</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className = "description block_3">
                            <div className = "header">
                            Why choose City Tipz?
                            </div>
                            <div className = "body">
                            City Tipz has gone above and beyond its philosophy by paying for employee education and training in return for knowledge sharing with the company and peers to enhance service quality and offer world-class client support. Our profit sharing model that helps train and employ the best in the market is also beneficial for both employees and client. We value our employees more then anything.
                            </div>
                        </div>
                    </div>

                    <div className = "col-lg-6 col-md-12">
                        <div className = "application-form">
                            <div>
                                <img alt="..." src = {assets.spotlight}/>
                            </div>
                            <div className = "text">
                            If you want to apply for a position, send us your CV and cover letter at jobs@olafic.com
                            </div>
                            <button className = "btn ola-btn-bordered s-btn">Send Application</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SignupStep1;