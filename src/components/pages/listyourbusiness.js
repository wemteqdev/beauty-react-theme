import React from 'react';

import SiteTitle from "../widget/Sitetitle";
import SearchBox from "../widget/searchbox/searchbox";
import CardList from "../widget/card-list";
import HomeTabbar from "../widget/home-tabbar";
import CommonBanner from "../widget/common-banner";
import SignUpBanner from "../widget/signup-banner";
import YourTimeList from "../widget/your-time-list";

import assets from "../assets";
import ProductDealsList from '../widget/product-deals-list';
import BecomePartnerList from '../widget/become-partner-list';
import BasePage from './BasePage';

import {isMobile} from 'react-device-detect';

class ListYourBusiness extends BasePage {
  render() {
    return (
        <div className = "listyourbusiness-page">
            { !isMobile &&
                <div className="marginBottom-64">
                    <SiteTitle/>
                    <SearchBox/>
                </div>
            }
            <HomeTabbar/>
            <CommonBanner 
                title = "Introducing In-Home Services"
                background = {assets.homeserviceback} buttonTitle = "Explore Olafic In-Home services">
                <div>
                    Our beauty pros come to your home, office or wherever your <br/> life takes you at salon’s prices
                </div>
            </CommonBanner>
            <CardList title = "Salons" moreLink = "/" moreLinkName = "Show all Saloons(2000)" category = 'business' keyword = 'salon'/>
            <YourTimeList/>
            <CardList title = "Beauty Pros" moreLink = "/" moreLinkName = "Show All Beauty Pros(2000)" category = 'professional' keyword = "beauty"/>
            <CommonBanner   
                title = "Are you a hair &amp; makeup professional?" 
                background = {assets.homeservicehaire} buttonTitle = "Join our team">
                <div>
                Make better money, on your own time. <br/>
                OlaFic makes it simple and secure to earn money and reach new <br/>
                or existing clients looking for services, just like yours.
                </div>
            </CommonBanner>
            <CardList title = "Make up Artist" moreLink = "/" moreLinkName = "Show Makeup Artist (2000)" category = "business" keyowrd = "artist"/>
            <CardList title = "Hair Stylists" moreLink = "/" moreLinkName = "Show All Hair Stylelist (2000)" category = "business" keyowrd = "hairstyle"/>
            <CommonBanner 
                title = "Marketplace" 
                background = {assets.homeservicemarketplace} buttonTitle = "Join our team">
                    <div>
                        Everything you need, your way!<br/>
                        Whether you want to sell online, or looking for that perfect item.<br/>
                        Access 1000s of items, or simply open your free e-store.  OlaFic has you covered.
                    </div>
                </CommonBanner>
            <ProductDealsList title = "Product Deals" moreLink = "/" moreLinkName = "Show All Product Deals (2000)"/>
            <BecomePartnerList/>
            <CardList title = "Manicure and Pedicure" moreLink = "/" moreLinkName = "Show All Manicure and Pedicure (2000)"/>
            <CardList title = "Spa &amp; Massage" moreLink = "/" moreLinkName = "Show All Spa &amp; Massage (2000)"/>
            <SignUpBanner text = "Join the Revolution" buttonTitle = "Sign Up Now"/>
        </div>
    );
  }
}

export default ListYourBusiness;
        
