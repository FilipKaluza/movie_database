import {useState} from "react";
import {useSelector} from "react-redux";

import Pagination from "../Pagination/Pagination";
import Spinner from "../shared/Spinner/Spinner";
import Card from "../shared/Card/Card";

import Row from "antd/lib/row";

const MoviesList = (props) => {

    const state = useSelector(state => state.reducer.movies)
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(8);

    let MoviesList = <p className="NotFoundOrSearch"> Vyhľadajte svoje obľúbené filmy </p>

    if(state.data !== null && state.data !== undefined) {
        const indexOfLastMovie = currentPage * moviesPerPage;
        const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
        const currentMovies = state.data.slice(indexOfFirstMovie, indexOfLastMovie)
        MoviesList = currentMovies.map((movie) => {
            let path = `movie/${movie.imdbID}`
            return (
                <Card key={movie.imdbID} path={path}  movie={movie}/>
            );
        })
    };

    if(state.data === undefined) {
        MoviesList = <p className="NotFoundOrSearch"> Nenašli sa žiadne filmy </p>
    }

    const changePage = (page) => setCurrentPage(page);
    
    return(
        <Row className="MoviesList">
            {state.loading ? <Spinner /> : MoviesList }
            {state.data === undefined || state.data === null ? null: <Pagination moviesPerPage={moviesPerPage}  totalMovies={state.data.length} paginate={changePage} />  }
        </Row>
    );
};

export default MoviesList;