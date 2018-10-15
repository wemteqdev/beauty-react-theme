import { combineReducers } from 'redux';
import  searchBarReducer from './searchBarReducers';
import pagePathReducers from './pagePathReducers';
import searchResultReducers from './searchResultReducers';
import searchNewsReducers from './searchNewsReducers';

export default combineReducers({
    searchbar:searchBarReducer,
    pagePath:pagePathReducers,
    searchResult:searchResultReducers,
    searchNewsResult:searchNewsReducers,
});