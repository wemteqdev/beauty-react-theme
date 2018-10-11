import React from 'react';
import assets from '../../assets';

import Proptypes from 'prop-types';

import * as searchActions from '../../../actions/searchActions';
import * as pagePathActons from '../../../actions/pagePathActions';

import { connect } from 'react-redux';
import * as http from '../../http';
// import history from '../../http/history';
import createBrowserHistory from 'history/createBrowserHistory'
import {Redirect } from 'react-router-dom'

const history = createBrowserHistory({forceRefresh:false})

const propTypes = {
    onClick:Proptypes.func,
    onChange:Proptypes.func,
    outClick:Proptypes.func
}

function createWarning(funcName) {
    return ()=> console.warn(funcName + ' is not defined');
}

const defaultProps = {
    onClick: createWarning('onClick'),
    onChange: createWarning('onChange')
}

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onPressSearchBtn = this.onPressSearchBtn.bind(this);
        this.state = {
            beforePath:null
        }
    }

    componentWillMount() {
        console.log(window.location.href);
        console.log("will mount");
    }

    componentDidMount() {
        this.props.transToPath(null);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        e.preventDefault();
        this.props.handleChangeSearchBar(e.target.value);
        this.props.handleClickSearchBar(e.target.value);
    }

    onClick(e) {
        e.preventDefault();
        this.props.handleClickSearchBar(e.target.value);
    }

    onKeyDown(e) {

        var focus = this.props.searchFocusIndex;
        
        if (e.keyCode == 40) {

            focus = Math.min(this.props.searchedResultList.length - 1, focus + 1);
            this.props.changeFocus(focus);

        } else if (e.keyCode == 38){

            focus = Math.max( 0, focus - 1);
            this.props.changeFocus(focus);

        } else if (e.keyCode == 13) {

            this.selectSearchedItem();

        } else if (e.keyCode == 27){

            this.props.handleEscClick();
            this.props.handleChangeSearchBar('');

        } else {

            this.searchResult(); 

        }
    }

    onPressSearchBtn(e){
        this.selectSearchedItem();
    }

    selectSearchedItem(){
        const focusindex = Math.max(this.props.searchFocusIndex,0);
        const latestSearch = this.props.searchedResultList[focusindex];
        if(!latestSearch){
            return;
        }
        this.props.selectSearchedItem(latestSearch.title);
        
        http.saveLatesSearchResult(latestSearch, (result)=>{
            this.props.saveRecentSearechResult(result);
        });

        const newpath = `/search?query=${JSON.stringify(latestSearch)}`;
        this.props.transToPath(newpath)
        
    }

    searchResult() {
        const queryobj = {
            query:this.props.query,
            category:this.props.activeCategory
        }
        http.fetchSearchResult(queryobj,(result) => {
            this.props.updateSearchedList(result);
        });
    }

    renderRedirect = () => {
        if(this.props.currentPath != this.state.beforePath){
            this.state.beforePath = this.props.currentPath;
            if(this.props.currentPath)
                return <Redirect to={this.props.currentPath} />
        }
    }
    
    render() {
        const toSearch = (this.props.searchBarClicked);
        return (

            <div className = "search-bar">
                {this.renderRedirect()}
                <span className = "search-img">
                        <img src = {assets.search}/>
                </span>
                <div className = "search-bar-input-container">
                    <input 
                        className = "none-border-input"
                        type = "text"
                        name = "query"
                        onChange = {this.onChange}
                        onKeyDown = {this.onKeyDown}
                        onClick = {this.onClick}
                        value = {this.props.query} 
                    />
                </div>
                <div className = "Line"></div>
                <div className = "search-bar-country-container">
                    <div  className = "country-name">New York, Nj</div>
                </div>
                <div className = "search-btn-container">
                    <button className = "btn ola-btn-primary search-btn" onClick = {this.onPressSearchBtn}>Search</button>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return  {
        searchBarClicked: state.searchbar.clicked,
        query:state.searchbar.searchQuery,
        searchedResultList:state.searchbar.searchedResultList,
        searchFocusIndex:state.searchbar.searchFocusIndex,
        activeCategory:state.searchbar.activeCategory,
        currentPath:state.pagePath.currentPath,
        beforePath:state.pagePath.beforePath,
    };
};
const mapDispatchToProps = (dispatch) => {
    // return bindActionCreatetors(actions, dispatch);
    return {
        handleClickSearchBar:()=>{
            dispatch(searchActions.clickSearchBar())
        },
        handleEscClick:()=>{
            dispatch(searchActions.outclickSearchBar())
        },
        changeFocus:(focus)=>{
            dispatch(searchActions.changeFocus(focus))
        },
        handleChangeSearchBar:(query)=>{
            dispatch(searchActions.typeSearchQuery(query))
        },
        updateSearchedList:(result) =>{
            dispatch(searchActions.updateSearchedResult(result))
        },
        saveRecentSearechResult:(recent) => {
            dispatch(searchActions.saveRecentSearechResult(recent));
        },
        selectSearchedItem:(title) => {
            dispatch(searchActions.selectSearchedItem(title))
        },
        transToPath:(path) => {
            dispatch(pagePathActons.transToPath(path))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);