import * as ActionTypes from './ActionTypes';


export const Leaders = (state = {
        isLoading: true,
        errMess: null,
        leaders: []
    }, action) => {

    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, errMess: null, leaders: action.payload} // create a new state object and return

        case ActionTypes.LEADERS_LOADING: 
            return {...state, isLoading: true, errMess: null, leaders: []}              // create a new state object and return

        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, leaders: []}   // create a new state object and return

        default:
            return state
    }
}