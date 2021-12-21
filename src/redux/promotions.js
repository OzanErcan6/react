import * as ActionTypes from './ActionTypes';

export const Promotions = (state={
        isLoading: true,
        errMess: null,
        promotions: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload} // create a new state object and return

        case ActionTypes.PROMOS_LOADING: 
            return {...state, isLoading: true, errMess: null, promotions: []}              // create a new state object and return

        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, promotions: []}   // create a new state object and return

        default:
            return state
    }
}