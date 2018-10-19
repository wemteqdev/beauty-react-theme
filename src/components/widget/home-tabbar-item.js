import React from 'react';
// import assets from '../assets';

import {isMobile} from 'react-device-detect';

class HomeTabbarItem extends React.Component {

    render() {
        const {title} = this.props;
        const {asset} = this.props;
        if (!isMobile) {
            return (
                <div className = "col-lg-3 col-md-6 col-sm-12">
                    <div className = "tabitem-container">
                        <img alt="..." src = {asset}></img>
                        <div className = "title">{title}</div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className = "col-12">
                    <div className = "mb-2 tabitem-mobile-container" style = {{height:'72px', background:`url(${asset})`, backgroundSize: 'cover'}}>
                        <div className = "title float-left p-2 bg-white">{title}</div>
                    </div>
                </div>
            );
        }
    }
}
export default HomeTabbarItem;