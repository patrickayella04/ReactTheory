import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS

} from '../types';

// A reducer is just a function so we export a arrow function. 

// State is emmutable meaning we cannot re-assign it. Thus we use the spread operator (...state) to make a copy of whats in the current state, and THEN add in any new additions or changes to it.
export default (state, action) => {
    switch (action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
            defualt:
            return state;
    }
};