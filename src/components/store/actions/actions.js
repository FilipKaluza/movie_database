import * as actionTypes from "./actionTypes";
import axios from "axios";

export const loadStarted = () => {
    return {
        type: actionTypes.LOAD_START,
    };
};

export const fetchMoviesSuccess = (movies) => {
    return {
        type: actionTypes.FETCH_MOVIES_SUCCESS,
        movies: movies,
    };
};

export const fetchMoviesFailed = (error) => {
    return {
        type: actionTypes.FETCH_MOVIES_FAILED,
        error: error
    };
};

export const fetchMovies = (input) => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://omdbapi.com/?apikey=6324c53e&s=${input}`)
            const movies = await response.data.Search
            dispatch(fetchMoviesSuccess(movies));
        }
        catch (err) {
            console.log(err)
        }
    };
};