import{ useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import { useDispatch, useSelector } from "react-redux";

import * as actions from "../store/actions/actions";

const SpecificMovie = () => {

    const specificFilm = useSelector(state => state.showSpecific);

    const dispatch = useDispatch();

    const {movieId} = useParams();

    useEffect(() => {
        dispatch(actions.fetchSpecificMovie(movieId))
    }, [dispatch, movieId])


    return(
        <>
            {specificFilm ?
                <Row className="Specific" justify="cetner" >
                    <Col xs={24} md={8} >
                        <img src={specificFilm.Poster} alt={specificFilm.Title} />
                    </Col>
                    <Col xs={24} md={16}>
                        <h1> {specificFilm.Title} </h1>
                        <p className="DataOfRealease" > Release date: {specificFilm.Released} </p>
                        <p className="Actors"> Actors: {specificFilm.Actors} </p>
                        <p> Genre: {specificFilm.Genre} </p>
                        <p> Runtime: {specificFilm.Runtime} </p>
                        <p> Director: {specificFilm.Director} </p>
                        <p> Awards: {specificFilm.Awards} </p>
                        <p> Country: {specificFilm.Country} </p>
                        <p> Language: {specificFilm.Language} </p>
                        <h2> Overview: </h2>
                        <p className="Plot"> {specificFilm.Plot} </p>
                        <h2> Ratings: </h2>
                        {specificFilm.Ratings.map((rating, index) => {
                            return (
                                <p key={index} > {rating.Source} : {rating.Value} </p>
                            )
                        })}
                        <p> IMDB Rating: {specificFilm.imdbRating} </p>
                        <h2> Others: </h2>
                        <p className="Others">
                            Rated: {specificFilm.Rated} <br/>
                            Writers: {specificFilm.Writer} <br/>
                            Production: {specificFilm.Production} <br/>
                            BoxOffice: {specificFilm.BoxOffice}
                        </p>


                    </Col>
                </Row> : <p> Načítavam </p> }
        </>
    );
};

export default SpecificMovie;