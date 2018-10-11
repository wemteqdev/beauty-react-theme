import * as types from '../actions/types';
const initialState = {
    currentPath:"/",
    filteropt:{
        active:null,
        activeService:'all',
        activeCategory:['spa fitness', 'spa fitness1', 'spa fitness2'],
        fromDate:null,
        toDate:null,
        time:null,
        maxPrice:10000,
        fromPrice:0,
        toPrice:5000,
        averagePrice:0
    },
    filterResult:[]
}

export default function(state = initialState, action) {
    switch(action.type){
        case types.CHANAGE_SEARCH_FITLER_OTPTION:
            return {
                ...state,
                filteropt:action.option
                
            }
        case types.OUT_CLICK_FILER_PANEL:
            return {
                ...state,
                filteropt: {
                    ...state.filteropt,
                    active:null
                }
            }
        case types.ON_HOVER_ITEM:
            return {
                ...state,
                filterResult:action.items
            }
        case types.SAVE_SERCH_RESULT:
            return {
                ...state,
                filterResult:action.items
            }
        default:
            return state;
    }
}
