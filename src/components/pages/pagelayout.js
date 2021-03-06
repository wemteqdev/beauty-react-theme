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
import SignupStepFooter from '../footer/signup-step-footer';
import SignupFooter from '../footer/signup-footer';

import Home from './listyourbusiness';
import BecomePro from './becomepro';
import SearchResult from './searchresult';

import AboutUs from './footerlink/aboutus';
import Advertise from './footerlink/advertise';
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
import SignHeader from '../header/mobile/sign-header';

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
  if (!isMobile) {
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
  } else {
    return (
      <Route {...rest} render={matchProps => (
        <div>
          <div className={containerClassName}>
            <SignHeader {...rest}/>
            <Component {...matchProps} {...rest}/>
          </div>
          <SignupStepFooter {...rest}/>
        </div>
      )} />
    )
  }
};

const SignPageLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div>
        <div className={containerClassName}>
          <SignHeader {...rest}/>
          <Component {...matchProps} />
        </div>
        { rest.page === 'signup' &&
          <SignupFooter {...rest}/>
        }
      </div>
    )} />
  )
};

const SignupStepPageLayout = ({component: Component, ...rest}) => {
  if (rest.cur_step < rest.total_step) {
    rest.step_type = "notlast";
  } else if (rest.cur_step === rest.total_step) {
    rest.step_type = "last";
  }
  return (
    <Route {...rest} render={matchProps => (
      <div>
        <div className={containerClassName}>
          <SignupStepHeader {...rest}/>
          <Component {...matchProps} />
        </div>
        { !isMobile ?
          <FooterFooter/>
        :
          <SignupStepFooter {...rest}/>
        }
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

                <DefaultLayout exact path="/advertise-on-olafic" component={Advertise}/>
                <DefaultLayout exact path="/claim-business" component={Claim}/>
                <DefaultLayout exact path="/business-support" component={BusinessSupport}/>
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
                <MainPageLayout exact path="/contact-support" component = {ContactPage}/>
                <MainPageLayout exact path="/team" component = {TeamPage}/>

                <DefaultLayout exact path="/stories" component = {Stories}/>
                <NewsPageLayout exact path="/story-page" component={StoryPage}/>

                <SignPageLayout exact path="/signin" component={SigninPage} page="signin"/>
                <SignPageLayout exact path="/signup" component={SignupPage} page="signup"/>
                <SignPageLayout exact path="/forgot-password" component={ResetPasswordPage}/>
                <DefaultLayout exact path="/signin-confirm" component={SigninConfirmPage}/>

                <SignupStepPageLayout exact path="/user-signup-step1" component={UserSignupStep1} type="user" percent={33} cur_step={1} total_step={2} title="Step 1: Let’s get started" footerTitle="Step 1: Where do you live?"/>
                <SignupStepPageLayout exact path="/user-signup-step2" component={UserSignupStep2} type="user" percent={100} cur_step={2} total_step={2} title="Step 2: What services are you interested in?" footerTitle="Let us customize your experience"/>

                <SignupStepPageLayout exact path="/pro-signup-step1" component={ProSignupStep1} type={"pro"} percent={33} cur_step={1} total_step={3} title={"Step 1: Services & Description"} footerTitle="Step 1: About You"/>
                <SignupStepPageLayout exact path="/pro-signup-step2" component={ProSignupStep2} type={"pro"} percent={66} cur_step={2} total_step={3} title={"Step 2: Your Location"} footerTitle="Step 2: Your Location"/>
                <SignupStepPageLayout exact path="/pro-signup-step3" component={ProSignupStep3} type={"pro"} percent={100} cur_step={3} total_step={3} title={"Step 3: When do you operate?"} footerTitle="Step 3: Your Schedule"/>

                <SignupStepPageLayout exact path="/business-signup-step1" component={BusinessSignupStep1} type={"business"} percent={15} cur_step={1} total_step={4} title={"Step 1: Listing your business"} footerTitle="Step 1: Business Info"/>
                <SignupStepPageLayout exact path="/business-signup-step2" component={BusinessSignupStep2} type={"business"} percent={30} cur_step={2} total_step={4} title={"Step 2: Business Contact & Description"} footerTitle="Step 2: Basic Info"/>
                <SignupStepPageLayout exact path="/business-signup-step3" component={BusinessSignupStep3} type={"business"} percent={62} cur_step={3} total_step={4} title={"Step 3: Business Location"} footerTitle="Step 3: Your Location"/>
                <SignupStepPageLayout exact path="/business-signup-step4" component={BusinessSignupStep4} type={"business"} percent={100} cur_step={4} total_step={4} title={"Step 4: When do you operate?"} footerTitle="Step 4: Your Schedule"/>

                <InvitePageLayout exact path="/invite-friends" component={InvitePage} who={"friends"} page="invite" percent={100} footerTitle="Step 3: Share the good news" step_type="invite"/>
                <InvitePageLayout exact path="/invite-clients" component={InvitePage} who={"clients"} page="invite" percent={100} footerTitle="Step 3: Share the good news" step_type="invite"/>
                { isMobile &&
                  <InvitePageLayout exact path="/choose-friends" component={ChooseFriendsPage} who={"friends"} page="invite" percent={100} footerTitle="Step 3: Share the good news" step_type="choose_friends"/>
                }
            </div>
        </Router>
    );
  }
}

export default PageLayout;
        
