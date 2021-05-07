import {useEffect, useState} from "react";
import { Input } from 'antd';

const SearchMovie = (props) => {

    const [input, setInput ] = useState("");
    const [movies, setMovies] = useState();

    const onInputChangeHandler = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }

    console.log(movies)

    useEffect(() => {
        const parsedMovies = JSON.parse(localStorage.getItem("movies"));
        setMovies(parsedMovies)
    }, [])


    return(
        <>
            <Input placeholder="Napíšte názov filmu" onChange={(e) => onInputChangeHandler(e)} />
        </>
    );
};

export default SearchMovie;