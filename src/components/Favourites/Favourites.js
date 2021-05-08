import {useState, useEffect} from "react";
import Row from "antd/lib/row";
import Card from "../shared/Card/Card";


const Favourites = () => {

    const [favourites, setFavurites] = useState(JSON.parse(localStorage.getItem("favourite-movies")) || null);
    console.log("FAVOURITES")

    useEffect(() => {
        setFavurites(JSON.parse(localStorage.getItem("favourite-movies")))
    }, [])

    let favouriteMovies = <p> Nemáte žiadne obľúvené filmy </p>
    if(favourites) {
        favouriteMovies = favourites.map((movie) => {
            let path = `movie/${movie.imdbID}`
            return (
                <Card path={path} movie={movie}/>
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