import React from 'react';
import assets from '../../assets';

class SiteTitle extends React.Component {

    render() {
        return (
            <div className = "site-title">
                <div className = "col-12">
                    <img src = {assets.olafic}/>
                </div>
                <div className = "col-12">
                    <div className = "site-title-comment">Beauty and Fitness at Your fingertips</div>
                </div>
            </div>
        );
    }

    
}

export default SiteTitle;