import * as types from '../actions/types';

const initialState = {
    alerts:[
        {
            type:'page-alert',
            data:''
        }
    ]
}

export default function(state = initialState, action) {
    switch(action.type){
        case types.CLICK_CLOSE_BUTTON:
            return {
                ...state,
                alerts:action.alerts
            }
        default:
            return state;
    }
}
