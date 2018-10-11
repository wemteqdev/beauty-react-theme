import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Route
} from 'react-router-dom';

import Header from '../header';
import HelpHeader from '../header/help-header';
import MainHeader from '../header/main-header';
import NewsPageHeader from '../header/news-page-header';

import Footer from '../footer';

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

const DefaultLayout = ({component: Component, ...rest}) => {
    window.scrollTo(0,0);
    return (
      <Route {...rest} render={matchProps => (
        <div className="DefaultLayout">
          <Header/>
            <Component {...matchProps} />
          <Footer/>
        </div>
      )} />
    )
};

const HelpPageLayout = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <div>
            <HelpHeader/>
            <Component {...matchProps} />
          <Footer/>
        </div>
      )} />
    )
};

const MainPageLayout = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <div>
            <MainHeader/>
            <Component {...matchProps} />
          <Footer/>
        </div>
      )} />
    )
};

const NewsPageLayout = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <div>
            <NewsPageHeader />
            <Component {...matchProps} />
          <Footer/>
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
            <div className = "page-layout">
                <DefaultLayout exact path="/" component={Home}/>
                <DefaultLayout exact path="/becomepro" component={BecomePro}/>
                <DefaultLayout exact path="/search" component={SearchResult}/>

                <DefaultLayout exact path="/aboutus" component={AboutUs}/>
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
                <HelpPageLayout exact path="/help-topic" component={HelpTopic}/>
                <HelpPageLayout exact path="/help-details" component={HelpDetails}/>

                <MainPageLayout exact path="/news" component = {News}/>

                <NewsPageLayout exact path="/news-page" component = {NewsPage}/>

            </div>
        </Router>
    );
  }
}

export default PageLayout;
        
