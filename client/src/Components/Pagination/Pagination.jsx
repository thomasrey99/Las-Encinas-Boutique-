import PropTypes from "prop-types";
import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, productsPerPage, products, paginate}) => {
    const totalPages = Math.ceil(products.length / productsPerPage);

    const pages = [];
    for(let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <nav className={styles.pagCont}>
            <div className={styles.pagButtons}>
                <button
                onClick={() => paginate(currentPage -1)}
                className={currentPage === 1 ? styles.disabled : ''}
                >
                    Prev
                </button>
                {pages.map((page) => (
                    <button
                    key={page}
                    onClick={() => paginate(page)}
                    className={currentPage === page ? styles.active : ""}
                    >
                        {page}
                    </button>
                ))}
                <button
                onClick={() => paginate(currentPage + 1)}
                className={currentPage === totalPages ? styles.disabled : ''}
                >
                    Next
                </button>
            </div>
        </nav>
    )
}
Pagination.propTypes ={
    currentPage: PropTypes.number.isRequired,
    productsPerPage: PropTypes.number.isRequired,
    products: PropTypes.array.isRequired,
    paginate: PropTypes.func.isRequired,
    }


export default Pagination;