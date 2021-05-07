import Row from "antd/lib/row";
import Col from "antd/lib/col";

import {useSelector} from "react-redux";
import { Spin  } from 'antd';

import { Card } from 'antd';
const { Meta } = Card;


const MoviesList = (props) => {

    const state = useSelector(state => state)
    console.log(state)


    let MoviesList = <p> Vyhľadajte svoje obľúbené filmy </p>
    if(state.movies) {
        MoviesList = state.movies.map((movie) => {
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
    };

    if(state.movies === undefined) {
        MoviesList = <p> Nenašli sa žiadne filmy </p>
    }
    

    return(
        <Row justify="space-around" className="MoviesList">
            {state.loading ? <Spin size="large" /> : MoviesList }
        </Row>
    );
};

export default MoviesList;