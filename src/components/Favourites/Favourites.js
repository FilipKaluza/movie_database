import { useSelector } from "react-redux";
import Row from "antd/lib/row";
import Card from "../shared/Card/Card";


const Favourites = () => {

    const favourites = useSelector( state => state.persistReducer.favourites );

    let favouriteMovies = <p> Nemáte žiadne obľúvené filmy </p>
    if(favourites) {
        favouriteMovies = favourites.map((movie) => {
            let path = `movie/${movie.imdbID}`
            return (
                <Card key={movie.imdbID} path={path} movie={movie}/>
            );
        })
    }

    return(
        <Row className="MoviesList" >
            {favouriteMovies}
        </Row>
    );
};

export default Favourites;