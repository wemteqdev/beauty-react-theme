import React from 'react';
import assets from '../assets';
import HomeTabbarItem from '../widget/home-tabbar-item';
import SearchBox from "./searchbox/searchbox";

import {isMobile} from 'react-device-detect';

class HomeTabbar extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <div className = "list-title d-flex justify-content-between align-items-end">
                    Explore OlaFic
                    <img alt="..." src={assets.search}/>
                </div>
                { isMobile &&
                    <SearchBox/>
                }
                <div className="row">
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