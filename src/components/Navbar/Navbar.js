import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import SearchBar from "../UI/Input/Input";
import { ReactComponent as LogoNav } from "../../assets/images/logoNav.svg";
import { ReactComponent as LogoNavMobile } from "../../assets/images/logoBlack.svg";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useLocation } from "react-router-dom";

import Row from "antd/lib/row";

const Navbar = () => {

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
            <Link className="LogoNav" to="/"> <LogoNav className="DesktopLogo" /> <LogoNavMobile className="MobileLogo" /> </Link>
            <div className="Navigation">
                <Link className="FavouriteNav" to="/favourites"> Favourites </Link>
                {serchVisible ? <SearchBar /> : <Link className="BackToSearch" to="/"> Back to Search  <ArrowLeftOutlined /> </Link>  }
            </div>
        </Row>
    );
};

export default Navbar;