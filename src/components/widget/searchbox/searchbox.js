import React from 'react';
import Proptypes from 'prop-types';

import OutSideEvent from './outSideEvent';
import SearchBar from './searchbar';
import SearchDropDownPanel from "./searchDropdownPanel";
import * as searchActions from '../../../actions/searchActions';
import * as searchResultActions from '../../../actions/searchResultActions';
import { connect } from 'react-redux';
import * as dummyData from './../dummyData';

class SearchBox extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.saveSearchResult(dummyData.filteredData);
    }
    showDropdownPanel(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div className = "searchbox-container">
                <OutSideEvent onOutClick = {this.props.handleOutClickSearchBar}>
                    <div>
                        <SearchBar 
                            onClick = {this.props.handleClickSearchBar}
                        />
                        <SearchDropDownPanel/>
                    </div>
                </OutSideEvent>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return  {
        searchBarClicked: state.searchbar.clicked,
    };
};

const mapDispatchToProps = (dispatch) => {
    // return bindActionCreatetors(actions, dispatch);
    return {
        handleOutClickSearchBar:()=>{
            dispatch(searchActions.outclickSearchBar())
        },
        saveSearchResult:(items)=>{
            dispatch(searchResultActions.saveSearchResult(items))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);