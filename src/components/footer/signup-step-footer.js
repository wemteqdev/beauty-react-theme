import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignupStepFooter extends Component {

    renderLinkButton = () => {
        let step_type = this.props.step_type;
        let cur_step = this.props.cur_step;
        let type = this.props.type;
        if (step_type === 'notlast') {
            return <Link to={`/${type}-signup-step${cur_step+1}`}><button className = "btn ola-btn ola-btn-bordered s-btn">Continue</button></Link>
        } else if (step_type === 'last') {
            return <button className = "btn ola-btn-primary s-btn">Finish Registration</button>
        } else if (step_type === 'invite') {
            return <Link to="/choose-friends" className="no_friends_yet">No Friends Yet :(</Link>
        } else if (step_type === 'choose_friends') {
            return <button className = "btn ola-btn-primary s-btn">Invite Friends</button>
        } else {
            return <div></div>
        }
    }
    render() {
        let footerTitle = this.props.footerTitle;
        let progress_bar_percent = "Percent-" + this.props.percent;
        return (
            <div className="signup-footer-container">
                <div className="w-100 bg-white">
                    <div className={`Progress-Bar ${progress_bar_percent}`}></div>
                </div>
                <div className ="signup-footer d-flex justify-content-between align-items-center">
                    <div className = "step-title">{footerTitle}</div>
                    {this.renderLinkButton()}
                </div>
            </div>
        );
    }
}

export default SignupStepFooter;
