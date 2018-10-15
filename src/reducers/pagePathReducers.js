import * as types from '../actions/types';

const initialState = {
    // currentPath:"/search",
    currentPath:"/",
}

export default function(state = initialState, action) {
    switch(action.type){
        case types.CHANGE_PAGE_PATH:
            return {
                ...state,
                currentPath: action.path,
            }
        default:
            return state;
    }
}
