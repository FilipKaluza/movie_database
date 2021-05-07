import Row from "antd/lib/row";
import Col from "antd/lib/col";

import { Card } from 'antd';
const { Meta } = Card;

const MoviesList = (props) => {


    let MoviesList = <p> No results </p>
    if(props.movies) {
        MoviesList = props.movies.map((movie) => {
            let releasedIn = `Released in: ${movie.Year}`
            return (
                <Col xs={24} sm={12} md={6}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src={movie.Poster} />} >
                        <Meta title={movie.Title} description={releasedIn}  />
                    </Card>
                </Col>
            );
        })
    }
    

    return(
        <Row justify="space-around" className="MoviesList">
            {MoviesList}
        </Row>
    );
};

export default MoviesList;