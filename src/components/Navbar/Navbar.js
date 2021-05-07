import Row from "antd/lib/row";

import SearchBar from "../SearchMovie/SearchMovie";

const Navbar = () => {

    return(
        <Row className="Navbar" >
            <h1 className="Logo"> Movie Database </h1>
            <h1 className="FavouriteNav"> Favourite</h1>
            <SearchBar />
        </Row>
    );
};

export default Navbar;