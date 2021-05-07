import * as actionTypes from "../actions/actionTypes";

const initialState = {
    movies: [],
    loading: false,
    error: null
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
        default:
            return state
    };
};

export default reducer;