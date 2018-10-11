import * as types from '../actions/types';

const initialState = {
    clicked:false,
    activeCategory:'all',
    searchFocusIndex:-1,
    searchedResultList:[],
    recentSearchList:[],
    searchQuery:"",
    isTyping:false,
    pageurl:"/"
}

export default function(state = initialState, action) {
    switch(action.type){
        case types.CLICK_SEARCH_BAR:
            if(state.searchQuery != ""){
                return {
                    ...state,
                    clicked:true,
                    searchFocusIndex: -1,
                }
            }
            return state;
        case types.OUT_CLICK_SEARCH_BAR:
            return {
                ...state,
                clicked:false,
                searchFocusIndex: -1,
                isTyping:false
            }
        case types.CLICK_CATEGORY:
            return {
                ...state,
                activeCategory:action.activeCategory,
                searchFocusIndex: -1,
                isTyping:false
            }
        case types.CHANGE_FOCUS:
            return {
                ...state,
                searchFocusIndex:action.focus
            }
        case types.TYPING_SEARCH_QUERY:
            var clicked = state.clicked;
            if(action.query == "")
                clicked = false;

            return {
                ...state,
                searchQuery:action.query,
                searchFocusIndex: -1,
                isTyping:true,
                clicked:clicked
            }
        case types.UPDATE_SEARCHED_RESULT:
            return {
                ...state,
                searchedResultList:action.result,
                searchFocusIndex: -1
            }
        case types.SAVE_RECENT_SEARCH_RESULT:
            console.info(action.result)
            return {
                ...state,
                recentSearchList:action.result,
                searchFocusIndex: -1
            }
        case types.SELECT_SEARCHED_ITEM:
            return {
                ...state,
                searchQuery:action.title,
                searchFocusIndex: -1,
                clicked:false,
                isTyping:false,
                pageurl:'search'
            }
        default:
            return state;
    }
}