import * as actionTypes from "./actionTypes";
import axios from "axios";
import {saveState} from "../localStorage/localStorage";

export const fetchMoviesStart = () => {
    return {
        type: actionTypes.LOAD_MOVIES_START,
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
            const response = await axios.get(`https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${input}`)
            const movies = await response.data.Search
            dispatch(fetchMoviesSuccess(movies));
        }
        catch (err) {
            
        }
    };
};

export const fetchSpecificMovieStart = () => {
    return {
        type: actionTypes.FETCH_SPECIFIC_START
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
            const response = await axios.get(`https://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`)
            dispatch(fetchSpecificMovieSucces(response.data))
        }
        catch(err) {
            dispatch(fetchSpecificMovieFailed("Nepodarilo sa načítať konkrétny film"))
        }
    };
};

export const addToFavourites = (newFavourites) => {
    saveState(newFavourites);
    return {
        type: actionTypes.ADD_TO_FAVOURITES,
        favourites: newFavourites
    };
};

export const removeFromFavourites = (filteredFavourites) => {
    saveState(filteredFavourites);
    return {
        type: actionTypes.REMOVE_FROM_FAVOURITES,
        favourites: filteredFavourites
    };
};