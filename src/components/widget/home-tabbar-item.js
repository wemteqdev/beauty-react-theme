import React from 'react';
import assets from '../assets';

class HomeTabbarItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title} = this.props;
        const {asset} = this.props;
        return (
            <div className = "ola-col-3">
                <div className = "tabitem-container">
                    <img src = {asset}></img>
                    <div className = "title">{title}</div>
                </div>
            </div>
        );
    }
}
export default HomeTabbarItem;