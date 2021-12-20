import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
        isLoading: true,
        errMess: null,
        dishes: []
    }, action) => {

    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload} // create a new state object and return

        case ActionTypes.DISHES_LOADING: 
            return {...state, isLoading: true, errMess: null, dishes: []}              // create a new state object and return

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: []}   // create a new state object and return

        default:
            return state
    }
}