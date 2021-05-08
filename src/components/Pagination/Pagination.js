import { Pagination } from 'antd';

const Pages = (props) => {

    return <Pagination responsive pageSize={props.moviesPerPage} total={props.totalMovies} onChange={(page) => props.paginate(page)} />
};

export default Pages;