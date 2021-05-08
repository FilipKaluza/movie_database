import {useState} from "react";

import Row from "antd/lib/row";
import Col from "antd/lib/col";

import Star from "../Favourites/Stars/Stars";
import Pagination from "../Pagination/Pagination";


import {useSelector} from "react-redux";
import { Spin  } from 'antd';

import { Link } from "react-router-dom";

import { Card } from 'antd';
const { Meta } = Card;


const MoviesList = (props) => {

    const state = useSelector(state => state)
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(8);

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = state.movies.slice(indexOfFirstMovie, indexOfLastMovie)

    let MoviesList = <p> Vyhľadajte svoje obľúbené filmy </p>
    if(state.movies) {
        const indexOfLastMovie = currentPage * moviesPerPage;
        const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
        const currentMovies = state.movies.slice(indexOfFirstMovie, indexOfLastMovie)
        MoviesList = currentMovies.map((movie) => {
            let releasedIn = `Released in: ${movie.Year}`
            let path = `movie/${movie.imdbID}`
            return (
                <Col key={movie.imdbID} xs={24} sm={12} md={6}>
                    <Link  to={path} >
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={movie.Poster} />} >
                            <Meta title={movie.Title} description={releasedIn}  />
                        </Card>
                    </Link>
                    <Star movie={{id: movie.imdbID, Poster: movie.Poster, Title: movie.Title}} />
                </Col>
            );
        })
    };

    if(state.movies === undefined) {
        MoviesList = <p> Nenašli sa žiadne filmy </p>
    }

    const changePage = (page) => setCurrentPage(page);
    
    return(
        <Row justify="space-around" className="MoviesList">
            {state.loading ? <Spin size="large" /> : MoviesList }
            <Pagination moviesPerPage={moviesPerPage}  totalMovies={state.movies.length} paginate={changePage} />
        </Row>
    );
};

export default MoviesList;