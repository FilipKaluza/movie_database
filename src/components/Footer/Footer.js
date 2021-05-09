import Row from "antd/lib/row";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

const Footer = () => {

    return(
        <div className="Footer">
            <Row>
                <FacebookOutlined />
                <InstagramOutlined />
                <LinkedinOutlined />
                <TwitterOutlined />
            </Row>
            <p> ©Movie Database 2021 </p>
        </div>
    );
};

export default Footer;