import { Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import MoviesList from "./components/MovieList/MoviesList";
import Favourites from "./components/Favourites/Favourites";
import SpecificMovie from "./components/SpecificMovie/SpecificMovie";

const App = () => {


    return (
        <div className="App">
            <Navbar />
            <Route path="/" exact component={MoviesList} />
            <Route path="/movie/:movieId" exact component={SpecificMovie} />
            <Route path="/favourites" exact component={Favourites} />
        </div>
    )
};

export default App;