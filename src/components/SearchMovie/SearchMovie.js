import {useEffect, useState} from "react";
import { Input } from 'antd';

import {useDispatch} from "react-redux";
import * as actions from "../store/actions/actions";

const SearchMovie = (props) => {

    const [input, setInput ] = useState("");

    const dispatch = useDispatch();

    const onInputChangeHandler = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }

    useEffect(() => {
        if(input !== "") {
            dispatch(actions.loadStarted())
            dispatch(actions.fetchMovies(input))
        }

    }, [dispatch, input])


    return(
        <>
            <Input placeholder="Napíšte názov filmu" onChange={(e) => onInputChangeHandler(e)} />
        </>
    );
};

export default SearchMovie;