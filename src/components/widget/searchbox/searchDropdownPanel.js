import React from 'react';
import SearchCategory from "./searchCategory";
import RecentSearchListItem from "./recentSearchListItem";
import SearchResultListItem from "./searchResultListItem";
import * as searchActions from '../../../actions/searchActions';
import { connect } from 'react-redux';


class SearchDropDownPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const isShowClaas = (this.props.searchBarClicked)? "search-result-show" : "search-result-hidden";
        const classname = `search-dropdown-panel-home ${isShowClaas}`;
        const activefocus = this.props.searchFocusIndex;

        const searchedResultList = this.props.searchedResultList.map((item, index) => (
            <SearchResultListItem title = {item.title} category = {item.category} linkurl = {item.linkurl} key = {index} highlight = {(index==activefocus)} focusindex = {index}/>
        ));

        const recentSearchResult = this.props.recentSearchResult.map((item, index) => (
            <RecentSearchListItem title = {item.title} created = {item.created} category = {item.category} linkurl = {item.linkurl} key = {index} highlight = {(index==activefocus)} focusindex = {index}/>
        ));

        console.info(this.props.isTyping);

        if(this.props.isTyping){
            return (
                <div className = {classname}> 
                    <div className = "search-result-container">
                        <div className = "search-result">
                            <ul className = "list-unstyled">
                                {searchedResultList}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
                <div className = {classname}> 
                    <div className = "recent-search-container">
                        <div className = "hint-text">
                            Explore "search query"
                        </div>
                        <SearchCategory/>
                        <div className = "recent-search-text">
                            Recent Searches
                        </div>
                        <div className = "recent-search">
                            <ul className = "list-unstyled">
                                {recentSearchResult}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }

        
    }
}

const mapStateToProps = (state) => {
    return  {
        searchBarClicked: state.searchbar.clicked,
        searchFocusIndex:state.searchbar.searchFocusIndex,
        searchedResultList:state.searchbar.searchedResultList,
        recentSearchResult:state.searchbar.recentSearchList,
        isTyping:state.searchbar.isTyping
    };
};


export default connect(mapStateToProps, null)(SearchDropDownPanel);