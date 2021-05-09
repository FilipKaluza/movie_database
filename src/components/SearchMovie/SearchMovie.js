import {useEffect, useState, useRef} from "react";
import { Input } from 'antd';

import {useDispatch} from "react-redux";
import * as actions from "../store/actions/actions";

const SearchMovie = () => {

    const [input, setInput ] = useState("");

    const dispatch = useDispatch();

    const inputRef = useRef(null);

    useEffect(() => {
        const debounce = setTimeout(() => {
            if(input !== "") {
                dispatch(actions.fetchMoviesStart())
                dispatch(actions.fetchMovies(input))
            }
        }, 500)
        return () => clearTimeout(debounce) 

    }, [dispatch, input])

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    /* useEffect(() => {
        let movies = JSON.parse(localStorage.getItem("movies"))
        dispatch({type: "LOADFS" , movies: movies})
    }, [dispatch]) */


    return(
        <>
            <Input ref={inputRef} placeholder="Enter your film" onChange={(e) => setInput(e.target.value)} />
        </>
    );
};

export default SearchMovie;