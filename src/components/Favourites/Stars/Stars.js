
import { useState, useEffect } from "react";
import { StarOutlined, StarFilled } from '@ant-design/icons';

const Stars = (props) => {

    const [actualFavourites, setActualFavourites] = useState( JSON.parse(localStorage.getItem("favourite-movies")) || [] )

    const addToFavorites = (movie) => {
        let newFavourites = JSON.parse(localStorage.getItem("favourite-movies")) 
        newFavourites.push(movie)
        console.log("NEW FAV " , newFavourites)
        localStorage.setItem("favourite-movies", JSON.stringify(newFavourites))
        setActualFavourites(newFavourites)
    }

    const removeFromFavourites = (id) => {
        let newFavourites = JSON.parse(localStorage.getItem("favourite-movies")) 
        let filteredFavourites = newFavourites.filter((item) => item.id !== id)
        localStorage.setItem("favourite-movies", JSON.stringify(filteredFavourites))
        setActualFavourites(filteredFavourites)
    }

    /* useEffect(() => {
        if(JSON.parse(localStorage.getItem("favourite-movies")) !== null) {
            setActualFavourites(JSON.parse(localStorage.getItem("favourite-movies")))
        }
    }, []) */

    let star = <StarOutlined onClick={() => addToFavorites(props.movie)} />
    if( actualFavourites.some(favorite => favorite.id === props.movie.id)) {
        return star = <StarFilled onClick={() => removeFromFavourites(props.movie.id)} />
    }

    return (
        <>
            {star}
        </>
    )
};

export default Stars;