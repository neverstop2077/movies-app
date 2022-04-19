import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ pagination, onPageChange }) => {
    const { page, total_pages, total_results } = pagination
    const handlePageChange = (newPage) => {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }

    return (
        <div className='pagination-container'>
            <button
                className="pagination-btn"
                disabled={page <= 1}
                onClick={() => handlePageChange(page - 1)}
            >
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <p className="pagination-page">{page} / {total_pages}</p>
            <button
                className="pagination-btn"
                disabled={page >= total_pages}
                onClick={() => handlePageChange(page + 1)}
            >
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
};

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;