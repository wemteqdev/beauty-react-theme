import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    // HashRouter as Router,
    Route
} from 'react-router-dom';

import {isMobile} from 'react-device-detect';

import Header from '../header';
import HelpHeader from '../header/help-header';
import MainHeader from '../header/main-header';
import NewsPageHeader from '../header/news-page-header';
import InvitePageHeader from '../header/invite-page-header';

import Footer from '../footer';
import FooterFooter from '../footer/footer-footer';

import Home from './listyourbusiness';
import BecomePro from './becomepro';
import SearchResult from './searchresult';

import AboutUs from './footerlink/aboutus';
import Advertiese from './footerlink/advertiese';
import Blogs from './footerlink/blogs';
import Careers from './footerlink/careers';
import Claim from './footerlink/claim';
import Categories from './footerlink/categories';
import CodeContent from './footerlink/codecontent';
import CreateSupport from './footerlink/createsupport';
import Facebook from './footerlink/facebook';
import ForBusiness from './footerlink/forbusiness';
import ForMembers from './footerlink/formembers';
import ForPros from './footerlink/forpros';

import Help from './help';
import ChooseAnotherBooking from './help/choose_another_booking';
import HelpTopic from './help/help_topic';
import HelpDetails from './help/help-details';

import Instagram from './footerlink/instagram';
import LinkedIn from './footerlink/linkedin';
import Locations from './footerlink/locations';
import NewsMedia from './footerlink/news_media';
import Press from './footerlink/press';
import SuccessStory from './footerlink/successstory';
import BusinessSupport from './footerlink/support';
import Team from './footerlink/team';
import Twitter from './footerlink/twitter';

import Terms from './footerlink/terms';

import News from '../pages/main/news/news';
import NewsPage from '../pages/main/news/news-page';
import FeaturesPage from '../pages/main/news/features-page';
import MediaAssetsPage from '../pages/main/news/media-assets-page';
import MediaAssetsIndividualPage from './main/news/media-assets-individual-page';
import ContactPage from './main/news/contact-page';
import TeamPage from './main/news/team-page';
import Stories from './main/news/stories';
import StoryPage from './main/news/story-page';

import SigninPage from './sign/signin';
import SignupPage from './sign/signup';
import ResetPasswordPage from './sign/reset-password';
import SigninConfirmPage from './sign/signin-confirm';

import SignupStepHeader from '../header/signup-step-header';
import UserSignupStep1 from './sign/signup/user/step1';
import UserSignupStep2 from './sign/signup/user/step2';
import InvitePage from './sign/signup/invite';
import ChooseFriendsPage from './sign/signup/choose-friends';

import ProSignupStep1 from './sign/signup/pro/step1';
import ProSignupStep2 from './sign/signup/pro/step2';
import ProSignupStep3 from './sign/signup/pro/step3';

import BusinessSignupStep1 from './sign/signup/business/step1';
import BusinessSignupStep2 from './sign/signup/business/step2';
import BusinessSignupStep3 from './sign/signup/business/step3';
import BusinessSignupStep4 from './sign/signup/business/step4';

var containerClassName = "container";
if (isMobile) {
  containerClassName = "mobile_container";
}

const DefaultLayout = ({component: Component, ...rest}) => {
    window.scrollTo(0,0);
    return (
      <Route {...rest} render={matchProps => (
        <div>
          <div className={containerClassName}>
            <Header/>
            <Component {...matchProps} />
          </div>
          <Footer/>
          <FooterFooter/>
        </div>
      )} />
    )
};

const HelpPageLayout = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <div>
          <div className={containerClassName}>
            <HelpHeader/>
            <Component {...matchProps} />
          </div>
          <Footer/>
          <FooterFooter/>
        </div>
      )} />
    )
};

const MainPageLayout = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <div>
          <div className={containerClassName}>
            <MainHeader/>
            <Component {...matchProps} />
          </div>
          <Footer/>
          <FooterFooter/>
        </div>
      )} />
    )
};

const NewsPageLayout = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <div>
          <div className={containerClassName}>
            <NewsPageHeader />
            <Component {...matchProps} />
          </div>
          <Footer/>
          <FooterFooter/>
        </div>
      )} />
    )
};

const InvitePageLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div>
        <div className={containerClassName}>
          <InvitePageHeader />
          <Component {...matchProps} {...rest}/>
        </div>
        <Footer/>
        <FooterFooter/>
      </div>
    )} />
  )
};

const SignPageLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className={containerClassName}>
        <Component {...matchProps} />
      </div>
    )} />
  )
};

const ChooseFriendsPageLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="choose-friend-page-layout">
        <div className={containerClassName}>
          <Component {...matchProps} />
        </div>
      </div>
    )} />
  )
};

const SignupStepPageLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div>
        <div className={containerClassName}>
          <SignupStepHeader {...rest} title={rest.title}/>
          <Component {...matchProps} />
        </div>
        <FooterFooter/>
      </div>
    )} />
  )
};

class PageLayout extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }

    componentDidUpdate(){
        
    }
  render() {
    return (
        <Router>
          <div>
                <DefaultLayout exact path="/" component={Home}/>
                <DefaultLayout exact path="/becomepro" component={BecomePro}/>
                <DefaultLayout exact path="/search" component={SearchResult}/>

                <DefaultLayout exact path="/about-olafic" component={AboutUs}/>
                <DefaultLayout exact path="/team" component={Team}/>
                <DefaultLayout exact path="/press" component={Press}/>
                <DefaultLayout exact path="/blogs" component={Blogs}/>
                <DefaultLayout exact path="/careers" component={Careers}/>
                <DefaultLayout exact path="/categories" component={Categories}/>
                <DefaultLayout exact path="/locations" component={Locations}/>

                <DefaultLayout exact path="/advertiese" component={Advertiese}/>
                <DefaultLayout exact path="/claim" component={Claim}/>
                <DefaultLayout exact path="/support" component={BusinessSupport}/>
                <DefaultLayout exact path="/successstory" component={SuccessStory}/>
                <DefaultLayout exact path="/formembers" component={ForMembers}/>
                <DefaultLayout exact path="/forpros" component={ForPros}/>
                <DefaultLayout exact path="/forbusiness" component={ForBusiness}/>
                <DefaultLayout exact path="/codecontent" component={CodeContent}/>

                <DefaultLayout exact path="/createsupport" component={CreateSupport}/>
                <DefaultLayout exact path="/news_media" component={NewsMedia}/>
                <DefaultLayout exact path="/facebook" component={Facebook}/>
                <DefaultLayout exact path="/instagram" component={Instagram}/>
                <DefaultLayout exact path="/twitter" component={Twitter}/>
                <DefaultLayout exact path="/linkedin" component={LinkedIn}/>
                <DefaultLayout exact path="/terms" component={Terms}/>

                <HelpPageLayout exact path="/help" component={Help}/>
                <HelpPageLayout exact path="/choose_another_booking" component={ChooseAnotherBooking}/>
                <HelpPageLayout exact path="/help-details" component={HelpDetails}/>
                <HelpPageLayout exact path="/help-topic" component={HelpTopic}/>

                <MainPageLayout exact path="/news" component = {News}/>

                <NewsPageLayout exact path="/news-page" component = {NewsPage}/>
                <MainPageLayout exact path="/features" component = {FeaturesPage}/>
                <MainPageLayout exact path="/media" component = {MediaAssetsPage}/>

                <MainPageLayout exact path="/media-individual" component = {MediaAssetsIndividualPage}/>
                <MainPageLayout exact path="/contact-us" component = {ContactPage}/>
                <MainPageLayout exact path="/team" component = {TeamPage}/>

                <DefaultLayout exact path="/stories" component = {Stories}/>
                <NewsPageLayout exact path="/story-page" component={StoryPage}/>

                <DefaultLayout exact path="/signin" component={SigninPage}/>
                <SignPageLayout exact path="/signup" component={SignupPage}/>
                <SignPageLayout exact path="/forgot-password" component={ResetPasswordPage}/>
                <DefaultLayout exact path="/signin-confirm" component={SigninConfirmPage}/>

                <SignupStepPageLayout exact path="/user-signup-step1" component={UserSignupStep1} type="user" percent={33} cur_step={1} total_step={2} title="Step 1: Let’s get started"/>
                <SignupStepPageLayout exact path="/user-signup-step2" component={UserSignupStep2} type="user" percent={100} cur_step={2} total_step={2} title="Step 2: What services are you interested in?"/>

                <SignupStepPageLayout exact path="/pro-signup-step1" component={ProSignupStep1} type={"pro"} percent={33} cur_step={1} total_step={3} title={"Step 1: Services & Description"}/>
                <SignupStepPageLayout exact path="/pro-signup-step2" component={ProSignupStep2} type={"pro"} percent={66} cur_step={2} total_step={3} title={"Step 2: Your Location"}/>
                <SignupStepPageLayout exact path="/pro-signup-step3" component={ProSignupStep3} type={"pro"} percent={100} cur_step={3} total_step={3} title={"Step 3: When do you operate?"}/>

                <SignupStepPageLayout exact path="/business-signup-step1" component={BusinessSignupStep1} type={"business"} percent={15} cur_step={1} total_step={4} title={"Step 1: Listing your business"}/>
                <SignupStepPageLayout exact path="/business-signup-step2" component={BusinessSignupStep2} type={"business"} percent={30} cur_step={2} total_step={4} title={"Step 2: Business Contact & Description"}/>
                <SignupStepPageLayout exact path="/business-signup-step3" component={BusinessSignupStep3} type={"business"} percent={62} cur_step={3} total_step={4} title={"Step 3: Business Location"}/>
                <SignupStepPageLayout exact path="/business-signup-step4" component={BusinessSignupStep4} type={"business"} percent={100} cur_step={4} total_step={4} title={"Step 4: When do you operate?"}/>

                <InvitePageLayout exact path="/invite-friends" component={InvitePage} who={"friends"}/>
                <InvitePageLayout exact path="/invite-clients" component={InvitePage} who={"clients"}/>
                <ChooseFriendsPageLayout exact path="/choose-friends" component={ChooseFriendsPage}/>
          </div>
        </Router>
    );
  }
}

export default PageLayout;
        
