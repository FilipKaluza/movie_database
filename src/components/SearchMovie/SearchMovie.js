import {useEffect, useState} from "react";
import { Input } from 'antd';

import {useDispatch} from "react-redux";
import * as actions from "../store/actions/actions";

const SearchMovie = (props) => {

    const [input, setInput ] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        const debounce = setTimeout(() => {
            if(input !== "") {
                dispatch(actions.fetchMoviesStart())
                dispatch(actions.fetchMovies(input))
            }
        }, 500)
        return () => clearImmediate(debounce)

    }, [dispatch, input])
    /* useEffect(() => {
        let movies = JSON.parse(localStorage.getItem("movies"))
        dispatch({type: "LOADFS" , movies: movies})
    }, [dispatch]) */


    return(
        <>
            <Input placeholder="Enter your film" onChange={(e) => setInput(e.target.value)} />
        </>
    );
};

export default SearchMovie;