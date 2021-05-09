import * as actionTypes from "../actions/actionTypes";
import { loadState } from "../localStorage/localStorage";

const persistedState = loadState();

const persistReducer = (state = persistedState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: action.favourites

            }
        case actionTypes.REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                favourites: action.favourites
            }
        default:
            return state
    }
};

export default persistReducer