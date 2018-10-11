import React from 'react';
import assets from '../assets';
import SearchTopicCategoryItem from './search-topic-category-item';
import * as dumyData from '../widget/dummyData';

class SearchTopicResult extends React.Component {

    constructor(props) {
        super(props);
    }

    renderSearchResult(items){
        const itemlist = items.map((item, index)=>(
            <SearchTopicCategoryItem className = "ola-col-3" categoryInfo = {item} key = {index}/>
        ));
        return itemlist;
    }

    render() {
        const searchresult = dumyData.helpTopicCategoryItems;
        return (
            <div className = "search-top-result ola-row rp-22">
                {this.renderSearchResult(searchresult)}
            </div>
        );
    }
}

export default SearchTopicResult;