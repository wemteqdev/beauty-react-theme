import React from 'react';
import BasePage from "./BasePage";
import SearchBox from "../widget/searchbox/searchbox";
import SearchFitlerOption from "../widget/searchbox/search-filter-options";
import PageAlertSysem from "../widget/page-alert-system";
import FilteredResult from "../widget/filterresult";


class SearchResult extends BasePage {
  render() {
    return (
        <div className = "searchresult-page">
            <div className = "searchresult-page-header">
                <SearchBox/>
                <PageAlertSysem/>
                <SearchFitlerOption/>
            </div>
            <FilteredResult/>
        </div>
    );
  }
}
export default SearchResult;
        
