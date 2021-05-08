
const Pagination = (props) => {


    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(props.totalMovies / props.moviesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="Pagination">
                {pageNumbers.map((page) => {
                    return (
                        <li onClick={() => props.paginate(page)} key={page} >
                            {page}
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default Pagination;