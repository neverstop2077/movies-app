import React, { useState } from 'react';
import PropTypes from 'prop-types';

const HeaderSearch = ({ onSearch, onClearSearch, onSortUp, onSortDown }) => {
    const [input, setInput] = useState('')
    const [searchBox, setSearchBox] = useState(false)

    const handleChangeInput = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (input) {
            onSearch(input)
            setInput('')
            setSearchBox(false)
        }
    }

    const handleClear = () => {
        onClearSearch()
    }

    const handleSortDown = () => {
        onSortDown()
    }
    const handleSortUp = () => {
        onSortUp()
    }

    return (
        <div className='header'>
            <div className="header-logo" onClick={handleClear}>
                <i className="header-icon fa-solid fa-film"></i>
                <h2 className="header-name">MovieOn</h2>
            </div>
            <div className="filter-container">
                <div className="search-container">
                    <form onSubmit={handleSubmit} className={searchBox ? "header-search" : "hide-search header-search"}>
                        <input
                            type="text"
                            className="input"
                            placeholder='Search...'
                            value={input}
                            onChange={handleChangeInput}
                        />
                    </form>
                    <span className={searchBox ? "clear-icon" : "search-icon"}>
                        {
                            searchBox ? <i onClick={() => { setSearchBox(!searchBox) }} className="fa-solid fa-xmark"></i> : <i onClick={() => { setSearchBox(!searchBox) }} className="fa-solid fa-magnifying-glass"></i>
                        }
                    </span>
                </div>
                <div className="sort-container">
                    <button onClick={handleSortDown} className="sort-btn">
                        <i className="sort-icon fa-solid fa-arrow-down-1-9"></i>
                        IMDb
                    </button>
                    <button onClick={handleSortUp} className="sort-btn">
                        <i className="sort-icon fa-solid fa-arrow-up-9-1"></i>
                        IMDb
                    </button>
                </div>
            </div>
        </div >
    );
};

HeaderSearch.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onClearSearch: PropTypes.func.isRequired,
    onSortUp: PropTypes.func.isRequired,
    onSortDown: PropTypes.func.isRequired,
};

export default HeaderSearch;