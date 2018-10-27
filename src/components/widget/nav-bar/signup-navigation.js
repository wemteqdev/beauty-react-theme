import React from 'react';
import assets from '../../assets';
import {
    Link    
} from 'react-router-dom';


class SignupNavigation extends React.Component {
    renderNavLinks = () => {
        let type = this.props.type;
        let cur_step = this.props.cur_step;
        let total_step = this.props.total_step;
        
        let navlinks = [];
        for (let i = 1; i <= total_step; i ++) {
            let navlink = "";
            if (i === cur_step) {
                navlink = (
                    <li className="nav-item active" key={i}>
                        <Link className="nav-link" to={`/${type}-signup-step${i}`}>{i} <span className="sr-only">(current)</span></Link>
                    </li>        
                )
            } else {
                navlink = (
                    <li className="nav-item" key={i}>
                        <Link className="nav-link" to={`/${type}-signup-step${i}`}>{i}</Link>
                    </li>        
                )
            }
            navlinks.push(navlink);
        }
        return (
            <ul className="navbar-nav ml-auto">
                {navlinks}
            </ul>
        )
    }
    render() {
        let progress_bar_percent = "Percent-" + this.props.percent;
        return (
            <div className="">
                <div className="w-100 fixed-top bg-white">
                    <div className={`Progress-Bar ${progress_bar_percent}`}></div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white marginTop-3">
                    <div className = "container">
                        <div className = "nabbar-brand">
                            <Link className="mr-3" to="/">
                                <img alt="..." src = {assets.logo}/>
                            </Link>
                            {this.props.title}
                        </div>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {this.renderNavLinks()}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default SignupNavigation;