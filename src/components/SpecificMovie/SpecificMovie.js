import{ useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import { useDispatch, useSelector } from "react-redux";

import Stars from "../shared/Stars/Stars";
import Spinner from "../shared/Spinner/Spinner";


import * as actions from "../store/actions/actions";

const SpecificMovie = () => {

    const SpecificMovie = useSelector(state => state.reducer.showSpecific);

    const dispatch = useDispatch();

    const {movieId} = useParams();

    useEffect(() => {
        dispatch(actions.fetchSpecificMovieStart())
        dispatch(actions.fetchSpecificMovie(movieId))
    }, [dispatch, movieId])

    let ratings = null
    if(SpecificMovie.data !== null && !SpecificMovie.loading) {
        ratings = SpecificMovie.data.Ratings.map((rating, index) => {
            return (
                <p key={index} > {rating.Source} : {rating.Value} </p>
            )
        })
    }

    return(
        <>
            {SpecificMovie.loading ? 
            <Spinner /> : 
            <Row className="Specific" justify="cetner" >
                    <Col xs={24} md={8} >
                        <img src={SpecificMovie.data.Poster} alt={SpecificMovie.data.Title} />
                    </Col>
                    <Col xs={24} md={16}>
                        <Row className="SpecificTitle">
                            <h1> {SpecificMovie.data.Title} </h1>
                            <Stars movie={{imdbID: SpecificMovie.data.imdbID, Poster: SpecificMovie.data.Poster, Title: SpecificMovie.data.Title}} />
                        </Row>
                        <p className="DataOfRealease" > Release date: {SpecificMovie.data.Released} </p>
                        <p className="Actors"> Actors: {SpecificMovie.Actors} </p>
                        <p> Genre: {SpecificMovie.data.Genre} </p>
                        <p> Runtime: {SpecificMovie.data.Runtime} </p>
                        <p> Director: {SpecificMovie.data.Director} </p>
                        <p> Awards: {SpecificMovie.data.Awards} </p>
                        <p> Country: {SpecificMovie.data.Country} </p>
                        <p> Language: {SpecificMovie.data.Language} </p>
                        <h2> Overview: </h2>
                        <p className="Plot"> {SpecificMovie.data.Plot} </p>
                        <h2> Ratings: </h2>
                        {ratings}
                        <p> IMDB Rating: {SpecificMovie.data.imdbRating} </p>
                        <h2> Others: </h2>
                        <p className="Others">
                            Rated: {SpecificMovie.data.Rated} <br/>
                            Writers: {SpecificMovie.data.Writer} <br/>
                            Production: {SpecificMovie.data.Production} <br/>
                            BoxOffice: {SpecificMovie.data.BoxOffice}
                        </p>
                    </Col>
                </Row>}
        </>
    );
};

export default SpecificMovie;