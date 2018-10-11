import React from 'react';
import assets from '../assets';

class SiteTitle extends React.Component {

    render() {
        return (
            <div className = "site-title">
                <div>
                    <img src = {assets.olafic}/>
                </div>
                <div>
                    <div className = "site-title-comment">Beauty and Fitness at Your fingertips</div>
                </div>
            </div>
        );
    }

    
}

export default SiteTitle;