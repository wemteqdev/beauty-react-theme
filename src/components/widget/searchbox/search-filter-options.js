import React from 'react';
import { connect} from 'react-redux';
import * as searchActions from '../../../actions/searchActions';
import SearchFilterOptionItem from './search-filter-option-item';

class SearchFilterOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const activeCategory = "all";
        return (
            <div className = "search-fitler-options">
                <ul className = "list-unstyled nav">
                    <SearchFilterOptionItem name = 'date'/>
                    <SearchFilterOptionItem name = 'price' value = "price"/>
                    <SearchFilterOptionItem name = 'types' value = "types"/>
                    <SearchFilterOptionItem name = 'sort' value = "sort"/>
                </ul>
            </div>
        )
    }
}


export default connect(null, null)(SearchFilterOptions);