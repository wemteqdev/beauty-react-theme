import React from 'react';
import assets from '../assets';
import HomeTabbarItem from './home-tabbar-item';
import {
    Link    
} from 'react-router-dom';

class ImageTitleDesMorelinkItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const title = this.props.title;
        const asset = this.props.asset;
        const readmore = this.props.readmore;
        const oriDes = this.props.description;
        const realDes = this.props.description;
        const layoutclass = `ola-col-${12 / this.props.cols}`;

        return (
            <div className = {layoutclass}>
                <div className = {`itdm ${this.props.className}`}>
                    <div>
                        <div className = "item-img" style = {
                                {background:`url(${this.props.asset})`}
                        }></div>
                    </div>
                    <div>
                        <div className = "ad-title">
                            {title}
                        </div>
                        <div className = "ad-description">
                            {oriDes}
                            { 
                                this.props.readmore? (<Link className = "ola-link" to="/">readmore...</Link>):''    
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ImageTitleDesMorelinkItem;