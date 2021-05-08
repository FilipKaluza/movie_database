import{ useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import { useDispatch, useSelector } from "react-redux";

import Stars from "../shared/Stars/Stars";
import Spinner from "../shared/Spinner/Spinner";


import * as actions from "../store/actions/actions";

const SpecificMovie = () => {

    const specificFilm = useSelector(state => state.showSpecific);
    console.log(specificFilm)

    const dispatch = useDispatch();

    const {movieId} = useParams();

    useEffect(() => {
        dispatch(actions.fetchSpecificMovieStart())
        dispatch(actions.fetchSpecificMovie(movieId))
    }, [dispatch, movieId])

    let ratings = null
    if(specificFilm.data !== null && !specificFilm.loading) {
        ratings = specificFilm.data.Ratings.map((rating, index) => {
            return (
                <p key={index} > {rating.Source} : {rating.Value} </p>
            )
        })
    }

    return(
        <>
            {specificFilm.loading ? 
            <Spinner /> : 
            <Row className="Specific" justify="cetner" >
                    <Col xs={24} md={8} >
                        <img src={specificFilm.data.Poster} alt={specificFilm.data.Title} />
                    </Col>
                    <Col xs={24} md={16}>
                        <Row>
                            <h1> {specificFilm.data.Title} </h1>
                            <Stars movie={{imdbID: specificFilm.data.imdbID, Poster: specificFilm.data.Poster, Title: specificFilm.data.Title}} />
                        </Row>
                        <p className="DataOfRealease" > Release date: {specificFilm.data.Released} </p>
                        <p className="Actors"> Actors: {specificFilm.Actors} </p>
                        <p> Genre: {specificFilm.data.Genre} </p>
                        <p> Runtime: {specificFilm.data.Runtime} </p>
                        <p> Director: {specificFilm.data.Director} </p>
                        <p> Awards: {specificFilm.data.Awards} </p>
                        <p> Country: {specificFilm.data.Country} </p>
                        <p> Language: {specificFilm.data.Language} </p>
                        <h2> Overview: </h2>
                        <p className="Plot"> {specificFilm.data.Plot} </p>
                        <h2> Ratings: </h2>
                        {ratings}
                        <p> IMDB Rating: {specificFilm.data.imdbRating} </p>
                        <h2> Others: </h2>
                        <p className="Others">
                            Rated: {specificFilm.data.Rated} <br/>
                            Writers: {specificFilm.data.Writer} <br/>
                            Production: {specificFilm.data.Production} <br/>
                            BoxOffice: {specificFilm.data.BoxOffice}
                        </p>
                    </Col>
                </Row>}
        </>
    );
};

export default SpecificMovie;