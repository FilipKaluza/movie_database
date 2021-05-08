import Col from "antd/lib/col";
import Row from "antd/lib/row";
import { Link } from "react-router-dom";

import Star from "../Stars/Stars";

const AntCard = (props) => {

    let title = props.movie.Title
    if(title.length > 15) {
        title = props.movie.Title.substring(0,15) + "..."
    }

    return (
        <Col className="CardWrapper" key={props.movie.imdbID} xs={24} sm={10} md={5}>
            <Link to={props.path}>
                <Row className="CardImg" span={24}>
                    <img src={props.movie.Poster} alt={props.movie.Title} />
                </Row>
            </Link>
            <Row className="CardDes">
                <p> {title} </p>
                <Star movie={{imdbID: props.movie.imdbID, Poster: props.movie.Poster, Title: props.movie.Title}} />
            </Row>
        </Col>
    );
};

export default AntCard;