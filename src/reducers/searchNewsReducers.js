import * as types from '../actions/types';
const initialState = {
    currentPath:"/",
    filteropt:{
        activeCategory:['Business Travel1', 'Business Travel2', 'Business Travel3'],
    },
    filterResult:[]
}

export default function(state = initialState, action) {
    switch(action.type){
        case types.CHANAGE_SEARCH_NEWS_FITLER_OTPTION:
            return {
                ...state,
                filteropt:action.option
            }
        default:
            return state;
    }
}
