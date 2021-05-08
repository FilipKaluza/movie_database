
import { useState } from "react";
import { StarOutlined, StarFilled } from '@ant-design/icons';

const Stars = (props) => {

    const [actualFavourites, setActualFavourites] = useState( JSON.parse(localStorage.getItem("favourite-movies")) || [] )

    const addToFavorites = (movie) => {
        let newFavourites = JSON.parse(localStorage.getItem("favourite-movies")) || []
        newFavourites.push(movie)
        localStorage.setItem("favourite-movies", JSON.stringify(newFavourites))
        setActualFavourites(newFavourites)
    }

    const removeFromFavourites = (id) => {
        let newFavourites = JSON.parse(localStorage.getItem("favourite-movies")) 
        let filteredFavourites = newFavourites.filter((item) => item.imdbID !== id)
        localStorage.setItem("favourite-movies", JSON.stringify(filteredFavourites))
        setActualFavourites(filteredFavourites)
    }

    let star = <StarOutlined onClick={() => addToFavorites(props.movie)} />
    if( actualFavourites.some(favorite => favorite.imdbID === props.movie.imdbID)) {
        return star = <StarFilled onClick={() => removeFromFavourites(props.movie.imdbID)} />
    }

    return (
        <>
            {star}
        </>
    )
};

export default Stars;