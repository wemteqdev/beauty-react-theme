import React from 'react';
import assets from '../assets';
import HomeTabbarItem from '../widget/home-tabbar-item';

class HomeTabbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className = "list-title">Explore OlaFic</div>
                <div className="ola-row rp-12">
                    <HomeTabbarItem title="Business" asset = {assets.hometab1}/>
                    <HomeTabbarItem title="Professionals" asset = {assets.hometab2}/>
                    <HomeTabbarItem title="Marketplace" asset = {assets.hometab3}/>
                    <HomeTabbarItem title="Deals" asset = {assets.hometab4}/>
                </div>
            </div>
        );
    }
}
export default HomeTabbar;