import {useState} from "react";
import { useSelector } from "react-redux";
import Row from "antd/lib/row";
import Card from "../shared/Card/Card";

import Pagination from "../shared/Pagination/Pagination";

const Favourites = () => {

    const favourites = useSelector( state => state.persistReducer.favourites );
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(8);

    let favouriteMovies = <p className="NoFavouriteFilms"> You have no favourite movies </p>
    if(favourites && favourites.length > 0) {
        const indexOfLastMovie = currentPage * moviesPerPage;
        const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
        const currentMovies = favourites.slice(indexOfFirstMovie, indexOfLastMovie)
        favouriteMovies = currentMovies.map((movie) => {
            let path = `movie/${movie.imdbID}`
            return (
                <Card key={movie.imdbID} path={path} movie={movie}/>
            );
        })
    }

    const changePage = (page) => setCurrentPage(page);

    return(
        <Row className="MoviesList" >
            {favouriteMovies}
            {favourites && favourites.length > 0 ? <Pagination moviesPerPage={moviesPerPage}  totalMovies={favourites.length} paginate={changePage} /> : null }
        </Row>
    );
};

export default Favourites;