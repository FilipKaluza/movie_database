import * as actionTypes from "../actions/actionTypes";

const initialState = {
    movies: {
        data: [],
        loading: false,
        error: null
    },
    showSpecific: {
        data: {Ratings: []},
        loading: false,
        error: null
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOAD_MOVIES_START:
            return {
                ...state,
                showSpecific: {
                    ...state.movies,
                    loading: true
                }
            }
        case actionTypes.FETCH_MOVIES_SUCCESS:
            return  {
                ...state,
                movies: {
                    ...state.movies,
                    data: action.movies,
                    loading: false
                }
            }
        case actionTypes.FETCH_MOVIES_FAILED:
            return {
                ...state,
                movies: {
                    ...state.movies,
                    error: action.error,
                    loading: false
                }
            }
        case actionTypes.FETCH_SPECIFIC_START:
            return {
                ...state,
                showSpecific: {
                    ...state.showSpecific,
                    loading: true,
                    data: null
                }
            }
        case actionTypes.FETCH_SPECIFIC_SUCCESS:
            return {
                ...state,
                showSpecific: {
                    ...state.showSpecific,
                    data: action.movie,
                    loading: false
                }
            }
        case actionTypes.FETCH_SPECIFIC_FAILED:
            return {
                ...state,
                showSpecific: {
                    ...state.showSpecific,
                    error: action.error,
                    loading: false
                }
            }
        case "LOADFS":
            return {
                ...state,
                movies: {
                    ...state.movies,
                    data: action.movies,
                    loading: false
                }
            }
        default:
            return state
    };
};

export default reducer;