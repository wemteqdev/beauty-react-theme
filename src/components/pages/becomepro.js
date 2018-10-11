import React, { Component } from 'react';
import {Router, Route, browserHistory} from "react-router";
import SiteTitle from '../widget/Sitetitle';
import SearchBox from '../widget/searchbox/searchbox';
import BasePage from './BasePage';

class BecomePro extends BasePage {
  render() {
    return (
        <div>
            <SiteTitle/>
            <SearchBox/>
        </div>
    );
  }
}
export default BecomePro;
        
