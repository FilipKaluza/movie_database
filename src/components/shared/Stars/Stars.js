import {useSelector, useDispatch} from "react-redux";
import { StarOutlined, StarFilled } from '@ant-design/icons';
import * as actions from "../../store/actions/actions";

const Stars = (props) => {

    /* const [actualFavourites, setActualFavourites] = useState( JSON.parse(localStorage.getItem("favourite-movies")) || [] ) */

    const actualFavourites = useSelector(state => state.persistReducer.favourites) || [];

    const dispatch = useDispatch();

    const addToFavorites = (movie) => {
        let newFavourites = [...actualFavourites]
        newFavourites.push(movie)
        dispatch(actions.addToFavourites(newFavourites))
    }

    const removeFromFavourites = (id) => {
        let actualFavouritesCopy = [...actualFavourites]
        let filteredFavourites = actualFavouritesCopy.filter((item) => item.imdbID !== id)
        dispatch(actions.removeFromFavourites(filteredFavourites));
    }

    let star = <StarOutlined onClick={() => addToFavorites(props.movie)} />
    if (actualFavourites !== null) {
        if( actualFavourites.some(favorite => favorite.imdbID === props.movie.imdbID)) {
            return star = <StarFilled onClick={() => removeFromFavourites(props.movie.imdbID)} />
        }
    }

    return (
        <>
            {star}
        </>
    )
};

export default Stars;