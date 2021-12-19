import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

// pure function
// setup states 

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};


// reducer will create a new state object because its immutable
// reduder iki parametre alir state ve action 
export const Reducer = (state = initialState, action) => {
    return state;
}



//action type i switch olarak kullanabilirsin