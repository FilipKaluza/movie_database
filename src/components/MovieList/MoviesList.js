import {useState} from "react";

import Row from "antd/lib/row";

import Pagination from "../Pagination/Pagination";
import Spinner from "../shared/Spinner/Spinner";
import Card from "../shared/Card/Card";


import {useSelector} from "react-redux";


const MoviesList = (props) => {

    const state = useSelector(state => state.movies)
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(8);

    let MoviesList = <p> Vyhľadajte svoje obľúbené filmy </p>
    if(state.data) {
        const indexOfLastMovie = currentPage * moviesPerPage;
        const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
        const currentMovies = state.data.slice(indexOfFirstMovie, indexOfLastMovie)
        MoviesList = currentMovies.map((movie) => {
            let path = `movie/${movie.imdbID}`
            return (
                <Card key={movie.imdbID} path={path}  movie={movie}/>
            );
        })
    };

    if(state.data === undefined) {
        MoviesList = <p> Nenašli sa žiadne filmy </p>
    }

    const changePage = (page) => setCurrentPage(page);
    
    return(
        <Row className="MoviesList">
            {state.loading ? <Spinner /> : MoviesList }
            {!state.loading && state.data !== undefined ? <Pagination moviesPerPage={moviesPerPage}  totalMovies={state.data.length} paginate={changePage} /> : null }
        </Row>
    );
};

export default MoviesList;