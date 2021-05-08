import { useState, useEffect} from "react";
import Row from "antd/lib/row";
import {Link} from "react-router-dom";

import SearchBar from "../SearchMovie/SearchMovie";

import { ArrowLeftOutlined } from '@ant-design/icons';
import { useLocation } from "react-router-dom";

const Navbar = (props) => {

    const [serchVisible, setSerchVisible] = useState(true)

    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/") {
            setSerchVisible(true)
        } else {
            setSerchVisible(false)
        }
    }, [location])

    return(
        <Row className="Navbar" >
            <Link className="Logo" to="/"> Movie Database </Link>
            <Link className="FavouriteNav" to="/favourites"> Favourites </Link>
             {serchVisible ? <SearchBar /> : <Link to="/"> <ArrowLeftOutlined > Späť na vyhľadávanie </ArrowLeftOutlined> </Link>  }
        </Row>
    );
};

export default Navbar;