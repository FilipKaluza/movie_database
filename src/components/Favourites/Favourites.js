import {useState, useEffect} from "react";

import Star from "./Stars/Stars";

import Row from "antd/lib/row";
import Col from "antd/lib/col";

import { Link } from "react-router-dom";

import { Card } from 'antd';
const { Meta } = Card;

const Favourites = () => {

    const [favourites, setFavurites] = useState(JSON.parse(localStorage.getItem("favourite-movies")) || null);

    useEffect(() => {
        setFavurites(JSON.parse(localStorage.getItem("favourite-movies")))
    }, [])

    let favouriteMovies = <p> Nemáte žiadne obľúvené filmy </p>
    if(favourites) {
        favouriteMovies = favourites.map((movie) => {
            let path = `movie/${movie.id}`
            return (
                <Col key={movie.imdbID} xs={24} sm={12} md={6}>
                    <Link to={path} >
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={movie.Poster} />} >
                            <Meta title={movie.Title}  />
                        </Card>
                    </Link>
                    <Star movie={movie} />
                </Col>
            );
        })
    }

    return(
        <Row>
            {favouriteMovies}
        </Row>
    );
};

export default Favourites;