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
            const response = await axios.get(`http://omdbapi.com/?${process.env.REACT_APP_API_KEY}=&s=${input}`)
            const movies = await response.data.Search
            dispatch(fetchMoviesSuccess(movies));
        }
        catch (err) {
            console.log(err)
        }
    };
};

export const fetchSpecificMovieSucces = (movie) => {
    return {
        type: actionTypes.FETCH_SPECIFIC_SUCCESS,
        movie: movie
    };
};

export const fetchSpecificMovieFailed = (error) => {
    return {
        type: actionTypes.FETCH_SPECIFIC_FAILED,
        error: error
    };
};

export const fetchSpecificMovie = (id) => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`)
            dispatch(fetchSpecificMovieSucces(response.data))
        }
        catch(err) {
            dispatch(fetchSpecificMovieFailed("Nepodarilo sa načítať konkrétny film"))
        }
    };
};