import * as actionTypes from "../actions/actionTypes";

const initialState = {
    movies: [],
    loading: false,
    error: null,
    showSpecific: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOAD_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_MOVIES_SUCCESS:
            return  {
                ...state,
                movies: action.movies,
                loading: false
            }
        case actionTypes.FETCH_MOVIES_FAILED:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.FETCH_SPECIFIC_SUCCESS:
            return {
                ...state,
                showSpecific: action.movie
            }
        case actionTypes.FETCH_SPECIFIC_FAILED:
            return {
                ...state,
                error: action.error
            }
        case "LOADFS":
            return {
                ...state,
                movies: action.movies
            }
        default:
            return state
    };
};

export default reducer;